// import "core-js/actual/promise";
// import "./pages/index.css";
// import img from "./images";
// Promise.resolve(42).then((x) => console.log(x));

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

const mainUser = new UserInfo({nameSelector, profileSelector});

const cardList = new Section (
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card (item, cardSelector, handlePhotoClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  },
  containerSelector
);

cardList.renderItems();

const popupWithAddForm = new PopupWithForm(".popup_type_add", submitAddCardHandler);
const popupWithEditForm = new PopupWithForm(".popup_type_edit", submitEditProfileHandler);
const popupWithImage = new PopupWithImage(".popup_type_photo");

popupWithAddForm.setEventListeners();
popupWithEditForm.setEventListeners();
popupWithImage.setEventListeners();

const validAddForm = new FormValidator(popupWithAddForm._popupForm, config);
const validEditForm = new FormValidator(popupWithEditForm._popupForm, config);

validEditForm.enableValidation();
validAddForm.enableValidation();

function submitEditProfileHandler() {
  mainUser.name = nameInput.value;
  mainUser.profile = profileInput.value;
  popupWithEditForm.close();
};

function submitAddCardHandler() {
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  };
  const card = new Card (newCard, cardSelector, handlePhotoClick);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  popupWithAddForm.close();
};

function handlePhotoClick(item) {
  popupTitle.textContent = item.name;
  popupPhoto.src = item.link;
  popupPhoto.alt = item.name;
  popupWithImage.open();
};

buttonEdit.addEventListener("click", () => {
  nameInput.value = mainUser.name;
  profileInput.value = mainUser.profile;
  popupWithEditForm.open();
});

buttonAdd.addEventListener("click", () => {
  popupAddForm.reset();
  validAddForm.toggleButton();
  popupWithAddForm.open();
});