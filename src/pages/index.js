<<<<<<< HEAD
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
} from "../utils/constants.js";
=======
// import "core-js/actual/promise";
// import "./pages/index.css";
// import img from "./images";
// Promise.resolve(42).then((x) => console.log(x));
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

<<<<<<< HEAD
const mainUser = new UserInfo( { nameSelector, profileSelector } );
=======
const mainUser = new UserInfo({nameSelector, profileSelector});
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe

const cardList = new Section (
  {
    items: initialCards,
    renderer: (item) => {
<<<<<<< HEAD
      const card = new Card (item, config.cardSelector, handlePhotoClick);
=======
      const card = new Card (item, cardSelector, handlePhotoClick);
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  },
<<<<<<< HEAD
  config.containerSelector
=======
  containerSelector
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
);

cardList.renderItems();

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
  mainUser.setUserInfo(item);
  profilePopup.close();
};

function submitAddCardHandler() {
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  };
<<<<<<< HEAD
  const card = new Card (newCard, config.cardSelector, handlePhotoClick);
=======
  const card = new Card (newCard, cardSelector, handlePhotoClick);
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  cardPopup.close();
};

function handlePhotoClick(item) {
  popupWithImage.open(item);
};

buttonEdit.addEventListener("click", () => {
  nameInput.value = mainUser.getUserinfo().name;
  profileInput.value = mainUser.getUserinfo().profile;
  profilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  popupAddForm.reset();
  validAddForm.toggleButton();
  cardPopup.open();
<<<<<<< HEAD
});
=======
});
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
