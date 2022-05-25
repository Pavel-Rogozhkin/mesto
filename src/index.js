import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const validEditForm = new FormValidator(popupEditForm, config);
const validAddForm = new FormValidator(popupAddForm, config);

addInitialCards();

validEditForm.enableValidation();
validAddForm.enableValidation();

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
  const newCard = {
    name: titleInput.value,
    link: linkInput.value
  }
  render(newCard);
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

function createCard (item) {
  const card = new Card (item, cardSelector, handlePhotoClick);
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

buttonEdit.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  profileInput.value = profileDescr.textContent;
  openPopup(popupEditProfile);
});

buttonAdd.addEventListener("click", () => {
  popupAddForm.reset();
  validAddForm.toggleButton();
  openPopup(popupAddWindow);
});

popupEditClosed.addEventListener("click", () => closePopup(popupEditProfile));
popupAddClosed.addEventListener("click", () => closePopup(popupAddWindow));
popupPhotoClosed.addEventListener("click", () => closePopup(popupPhotoWindow));
popupEditForm.addEventListener("submit", submitEditProfileHandler);
popupAddForm.addEventListener("submit", submitAddCardHandler);