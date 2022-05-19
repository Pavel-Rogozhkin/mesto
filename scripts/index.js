import { Card, initialCards } from "./Card.js";
import { toggleButton } from "./validate.js";

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
const templateElement = document.querySelector(".templateElement");
const popupTitle = document.querySelector(".popup__title-photo");
const popupPhoto = document.querySelector(".popup__photo");

export const config = {
  popupOpened: ".popup_opened",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__submit",
  submitDisabled: "popup__submit_type_disabled",
  inputError: "popup__input_type_error",
  formError: "popup__form-input-error",
}

function openPopup (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener("mousedown", closeByOverlay);
}

function closePopup (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEsc);
  popup.removeEventListener("mousedown", closeByOverlay);
}

function submitEditProfileHandler (event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescr.textContent = profileInput.value;
  closePopup(popupEditProfile);
}

function submitAddCardHandler (event) {
  event.preventDefault();
  const newObject = {
    name: titleInput.value,
    link: linkInput.value
  }
  cardsContainer.prepend(...[createCard(newObject)]);
  closePopup(popupAddWindow);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened); 
  };
};

function closeByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  };
};

//-----------------------------------------------------

// function createCard (item) {
//   const cloneElement = templateElement.content.cloneNode(true);
//   const photoElement = cloneElement.querySelector(".element__photo");
//   photoElement.src = item.link;
//   photoElement.alt = item.name;
//   cloneElement.querySelector(".element__title").textContent = item.name;

//   const buttonLike = cloneElement.querySelector(".element__heart");
//   buttonLike.addEventListener('click', () => {
//     buttonLike.classList.toggle("element__heart_active"); 
//   })

//   const cardDelete = cloneElement.querySelector(".element__delete");
//   cardDelete.addEventListener('click', () => {
//     cardDelete.closest(".element").remove();
//   })

//   const buttonPhoto = cloneElement.querySelector(".element__photo");
//   buttonPhoto.addEventListener("click", function (event) {
//     popupTitle.textContent = event.target.alt;
//     popupPhoto.src = event.target.src;
//     popupPhoto.alt = event.target.alt;
//     openPopup(popupPhotoWindow);
//   });

//   return cloneElement;
// }

function createCard (item) {
  const card = new Card (item, templateElement, handlePhotoClick);
  const cardElement = card.generateCard();
  return cardElement;
};

function handlePhotoClick(item) {
  popupTitle.textContent = item.name;
  popupPhoto.src = item.link;
  popupPhoto.alt = item.name;
  openPopup(popupPhotoWindow);
}

function render(item) {
  cardsContainer.prepend(createCard(item));
};

function addInitialCards() {
  initialCards.forEach(render);
}

addInitialCards();

// const card = initialCards.map(createCard);

buttonEdit.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  profileInput.value = profileDescr.textContent;
  openPopup(popupEditProfile);
});


const button = popupAddForm.querySelector(config.buttonSelector);

buttonAdd.addEventListener("click", () => {
  popupAddForm.reset();
  toggleButton(popupAddForm, button, config);
  openPopup(popupAddWindow);
});

popupEditClosed.addEventListener("click", () => closePopup(popupEditProfile));
popupAddClosed.addEventListener("click", () => closePopup(popupAddWindow));
popupPhotoClosed.addEventListener("click", () => closePopup(popupPhotoWindow));
popupEditForm.addEventListener("submit", submitEditProfileHandler);
popupAddForm.addEventListener("submit", submitAddCardHandler);

// render();