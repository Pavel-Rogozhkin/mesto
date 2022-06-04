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

export const config = {
  popupOpened: ".popup_opened",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__submit",
  submitDisabled: "popup__submit_type_disabled",
  inputError: "popup__input_type_error",
  formError: "popup__form-input-error",
  cardSelector: ".templateElement",
  containerSelector: ".elements__list",
}
