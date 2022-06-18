import "core-js/actual/promise";
import "../pages/index.css";

import { 
  initialCards,
  config,
  nameSelector,
  profileSelector,
  buttonEdit,
  buttonAdd,
  popupAddForm,
  nameInput,
  profileInput,
  titleInput,
  linkInput,
  token,
  avatar,
  avatarClick,
  API_URL,
} from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

const api = new Api(API_URL, token);

const mainUser = new UserInfo( { nameSelector, profileSelector } );

const cardPopup = new PopupWithForm(".popup_type_add", submitAddCardHandler);
const profilePopup = new PopupWithForm(".popup_type_edit", submitEditProfileHandler);
const avatarPopup = new PopupWithForm(".popup_type_edit-avatar", submitEditAvatarHandler);
const popupWithImage = new PopupWithImage(".popup_type_photo");
const popupDelCard = new PopupWithConfirmation(".popup_type_delete-card", submitDeleteCardHandler); 

const validAddForm = new FormValidator(cardPopup._popupForm, config);
const validEditForm = new FormValidator(profilePopup._popupForm, config);
const validAvatarForm = new FormValidator(avatarPopup._popupForm, config);

getUserData();
getInitialCards();

cardPopup.setEventListeners();
profilePopup.setEventListeners();
popupWithImage.setEventListeners();
avatarPopup.setEventListeners();
popupDelCard.setEventListeners();

validEditForm.enableValidation();
validAddForm.enableValidation();
validAvatarForm.enableValidation();

const createNewCard = (item) => {
  const card = new Card (item, config.cardSelector, {
    handlePhotoClick: () => {
      popupWithImage.open(item);
    },
    handleCardLike: (cardId, like) => {
      console.log(cardId, like);
      api.changeCardLikeState(cardId, like)
        .then((res) => {
          console.log(res);
          card.countLikes(res); 
        })
        .catch((err) => console.log(err))
    },
    handleDeleteCard(item) {
      popupDelCard.open();
      popupDelCard.handleSubmit(() => {
        api.deleteCard(item)
          .then(() => card.deleteCard())
          .catch((err) => console.log(err))
        popupDelCard.close();
      });
    },
  });
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

function getInitialCards() {
  api.getCards()
    .then((cards) => {
      cardList.renderItems(cards);
    })
};

function getUserData() {
  api.getUserInfo()
    .then((user) => {
      nameInput.value = user.name;
      profileInput.value = user.about;
      mainUser.setUserInfo({name: user.name, link: user.about});
    })
};

function submitDeleteCardHandler(data) {
  popupDelCard.open();
  popupDelCard.handleSubmit(() => {
    api.deleteCard(data)
      .then(() => card.deleteCard());
    popupDelCard.close();
  })
};

function submitEditProfileHandler(item) {
  api.editUserInfo({name: item.name, about: item.link});
  mainUser.setUserInfo(item);
  profilePopup.close();
};

function submitEditAvatarHandler(avatarUrl) {
  avatar.src = avatarUrl.name;
  avatarPopup.close();
};

function submitAddCardHandler() {
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  };
  api.addCard(newCard)
    .then((newCard) => {
      const newCardElement = createNewCard(newCard);
      cardList.addItem(newCardElement);
    })
  cardPopup.close();
};

buttonEdit.addEventListener("click", () => {
  api.getUserInfo()
    .then((user) => {
      nameInput.value = user.name;
      profileInput.value = user.about;
    });
  profilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  popupAddForm.reset();
  validAddForm.toggleButton();
  cardPopup.open();
});

avatarClick.addEventListener("click", () => {
  avatarPopup.open();
});
