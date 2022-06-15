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

/**
 *   // "073000a2c03c6157e0c0cbda" - "MY_Id"
 */

const api = new Api(API_URL, token);

const mainUser = new UserInfo( { nameSelector, profileSelector } );

const cardPopup = new PopupWithForm(".popup_type_add", submitAddCardHandler);
const profilePopup = new PopupWithForm(".popup_type_edit", submitEditProfileHandler);
const avatarPopup = new PopupWithForm(".popup_type_edit-avatar", submitEditAvatarHandler);
const popupWithImage = new PopupWithImage(".popup_type_photo");
const popupWithConfirmation = new PopupWithConfirmation(".popup_type_delete-card", submitDeleteCardHandler); 

const validAddForm = new FormValidator(cardPopup._popupForm, config);
const validEditForm = new FormValidator(profilePopup._popupForm, config);
const validAvatarForm = new FormValidator(avatarPopup._popupForm, config);

getInitialCards();
getUserData();

function getInitialCards() {
  api.getCards()
    .then((result) => {
      const cardList = new Section (
        {
          items: result,
          renderer: (item) => {
            const card = new Card (item, config.cardSelector, handlePhotoClick);
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
          }
        },
        config.containerSelector
      );
      cardList.renderItems();
    })
}

function getUserData() {
  api.getUserInfo()
    .then((user) => {
      nameInput.value = user.name;
      profileInput.value = user.about;
        mainUser.setUserInfo({name: user.name, link: user.about});
    });
}

cardPopup.setEventListeners();
profilePopup.setEventListeners();
popupWithImage.setEventListeners();
avatarPopup.setEventListeners();
popupWithConfirmation.setEventListeners();

validEditForm.enableValidation();
validAddForm.enableValidation();
validAvatarForm.enableValidation();

function submitDeleteCardHandler() {
  api.deleteCard(cardId);
  popupWithConfirmation.close();
};

function submitEditProfileHandler(item) {
  api.editUserInfo({name: item.name, about: item.link});
  mainUser.setUserInfo(item);
  profilePopup.close();
};

function submitEditAvatarHandler(avatarUrl) {
  avatar.src = avatarUrl.name;
  avatarPopup.close();
}

function submitAddCardHandler() {
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  };
  api.addCard(newCard)
    .then((newCard) => {
      const card = new Card (newCard, config.cardSelector, handlePhotoClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    })
  cardPopup.close();
};

function handlePhotoClick(item) {
  popupWithImage.open(item);
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
})
