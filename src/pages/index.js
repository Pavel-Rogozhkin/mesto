import "core-js/actual/promise";
import "../pages/index.css";

import { 
  config,
  nameSelector,
  profileSelector,
  buttonEdit,
  buttonAdd,
  nameInput,
  profileInput,
  token,
  avatarSelector,
  avatarClick,
  API_URL,
} from "../utils/constants.js";

const headers = { 'Content-type': 'application/json', authorization: token, };

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

const api = new Api(API_URL, headers);

Promise.all([api.getUserInfo()])
  .then(([user]) => {
      nameInput.value = user.name;
      profileInput.value = user.about;
      mainUser.setUserInfo({name: user.name, about: user.about, avatar: user.avatar});
      mainUser.setMyId(user._id);
    })
  .catch((err) => console.log(err));

const mainUser = new UserInfo( { nameSelector, profileSelector, avatarSelector } );
const cardPopup = new PopupWithForm(".popup_type_add", submitAddCardHandler);
const profilePopup = new PopupWithForm(".popup_type_edit", submitEditProfileHandler);
const avatarPopup = new PopupWithForm(".popup_type_edit-avatar", submitEditAvatarHandler);
const popupWithImage = new PopupWithImage(".popup_type_photo");
const popupDelCard = new PopupWithConfirmation(".popup_type_delete-card"); 
const validAddForm = new FormValidator(cardPopup.popupForm, config);
const validEditForm = new FormValidator(profilePopup.popupForm, config);
const validAvatarForm = new FormValidator(avatarPopup.popupForm, config);

cardPopup.setEventListeners();
profilePopup.setEventListeners();
popupWithImage.setEventListeners();
avatarPopup.setEventListeners();
popupDelCard.setEventListeners();

validEditForm.enableValidation();
validAddForm.enableValidation();
validAvatarForm.enableValidation();

const createNewCard = (item) => {
  const myId = mainUser.getMyId();
  const card = new Card (item, config.cardSelector, {
    handlePhotoClick: () => {
      popupWithImage.open(item);
    },
    handleCardLike: (cardId, like) => {
      api.changeCardLikeState(cardId, like)
        .then((res) => {
          card.countLikes(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          card.toggleLike(); 
        })
    },
    handleDeleteCard(cardId) {
      popupDelCard.open();
      popupDelCard.submitDeleteCard(() => {
        api.deleteCard(cardId)
          .then(() => card.deleteCard())
          .catch((err) => console.log(err))
        popupDelCard.close();
      });
    },
    myId: myId,
  }
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section (
  {
    renderer: (item) => {
      const newCardElement = createNewCard(item);
      cardList.addItem(newCardElement);
    }
  },
  config.containerSelector
);

Promise.all([api.getCards()])
  .then(([cards]) => {
      cardList.renderItems(cards);
    })
  .catch((err) => console.log(err));

function submitEditProfileHandler(item) {
  profilePopup.isLoading(true, config.buttonSelector, profilePopup);
  api.editUserInfo({name: item.name, about: item.link, avatar: item.avatar})
    .then((user) => {
      mainUser.setUserInfo(user);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      profilePopup.isLoading(false, config.buttonSelector, profilePopup);
      profilePopup.close();
    })
};

function submitEditAvatarHandler(avatarUrl) {
  avatarPopup.isLoading(true, config.buttonSelector, avatarPopup);
  api.editAvatar(avatarUrl)
    .then(() => { mainUser.setAvatar(avatarUrl);})
    .catch((err) => console.log(err))
    .finally(() => {
      avatarPopup.isLoading(false, config.buttonSelector, avatarPopup);
      avatarPopup.close();
    })
};

function submitAddCardHandler(item) {
  cardPopup.isLoading(true, config.buttonSelector, cardPopup);
  const newCard = {
    name: item.name,
    link: item.link,
  };
  api.addCard(newCard)
    .then((newCard) => {
      const newCardElement = createNewCard(newCard);
      cardList.addItem(newCardElement);
    })
    .finally(() => {
      cardPopup.isLoading(false, config.buttonSelector, cardPopup);
      cardPopup.close();
    })
};

buttonEdit.addEventListener("click", () => {
  nameInput.textContent = document.querySelector(nameSelector).textContent;
  profileInput.textContent = document.querySelector(profileSelector).textContent;
  validEditForm.toggleButton();
  profilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  validAddForm.toggleButton();
  cardPopup.open();
});

avatarClick.addEventListener("click", () => {
  validAvatarForm.toggleButton();
  avatarPopup.open();
});
