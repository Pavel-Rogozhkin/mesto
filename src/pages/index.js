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
} from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43', token);

// const cardList = {};

// api.getUserInfo()
// .then((user) => {
//   nameInput.value = user.name;
//   profileInput.value = user.about;
// });

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

const mainUser = new UserInfo( { nameSelector, profileSelector } );

const cardPopup = new PopupWithForm(".popup_type_add", submitAddCardHandler);
const profilePopup = new PopupWithForm(".popup_type_edit", submitEditProfileHandler);
const popupWithImage = new PopupWithImage(".popup_type_photo");

cardPopup.setEventListeners();
profilePopup.setEventListeners();
popupWithImage.setEventListeners();

const validAddForm = new FormValidator(cardPopup._popupForm, config);
const validEditForm = new FormValidator(profilePopup._popupForm, config);

validEditForm.enableValidation();
validAddForm.enableValidation();

function submitEditProfileHandler(item) {
  api.editUserInfo({name: item.name, about: item.link}); //{name: item.name, about: item.profile}
  mainUser.setUserInfo(item);
  profilePopup.close();
};

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
