<<<<<<< HEAD
export const popupAddForm = document.querySelector(".popup__form_type_add");
export const nameInput = document.querySelector(".popup__input_type_name");
export const profileInput = document.querySelector(".popup__input_type_profile");
export const titleInput = document.querySelector(".popup__input_type_title");
export const linkInput = document.querySelector(".popup__input_type_link");
export const buttonEdit = document.querySelector(".profile__button-edit");
export const buttonAdd = document.querySelector(".profile__button-add");
export const nameSelector = ".profile__title";
export const profileSelector = ".profile__description";


export const initialCards = [
=======
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddWindow = document.querySelector(".popup_type_add");
const popupPhotoWindow = document.querySelector(".popup_type_photo");
const popupEditClosed = popupEditProfile.querySelector(".popup__close");
const popupAddClosed = popupAddWindow.querySelector(".popup__close_type_add");
const popupPhotoClosed = popupPhotoWindow.querySelector(".popup__close_type_photo");
const popupEditForm = document.querySelector(".popup__form_type_edit");
const popupAddForm = document.querySelector(".popup__form_type_add");
const nameInput = document.querySelector(".popup__input_type_name");
const profileInput = document.querySelector(".popup__input_type_profile");
const titleInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");
const buttonEdit = document.querySelector(".profile__button-edit");
const buttonAdd = document.querySelector(".profile__button-add");
const profileTitle = document.querySelector(".profile__title");
const profileDescr = document.querySelector(".profile__description");
const cardsContainer = document.querySelector(".elements__list");
// const popupTitle = document.querySelector(".popup__title-photo");
// const popupPhoto = document.querySelector(".popup__photo");

const cardSelector = ".templateElement";
const containerSelector = ".elements__list";
const nameSelector = ".profile__title";
const profileSelector = ".profile__description";

const initialCards = [
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

<<<<<<< HEAD
export const config = {
=======
const config = {
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
  popupOpened: ".popup_opened",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__submit",
  submitDisabled: "popup__submit_type_disabled",
  inputError: "popup__input_type_error",
  formError: "popup__form-input-error",
<<<<<<< HEAD
  cardSelector: ".templateElement",
  containerSelector: ".elements__list",
}
=======
}
>>>>>>> bf0f0a2e6008e0abb9f5b69b7cf040ffe203e6fe
