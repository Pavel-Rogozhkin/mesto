/*Variables*/ 
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
const cardTitle = document.querySelector(".element__title");
const cardLink = document.querySelector(".element__photo");
const cardsContainer = document.querySelector(".elements__list");
const templateElement = document.querySelector(".templateElement");
const photoButton = cardsContainer.querySelector(".element_photo");
const popupTitle = document.querySelector(".popup__title-photo");
const popupPhoto = document.querySelector(".popup__photo");

/*Functions*/ 
function openPopup (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener("mousedown", closeByOverlay);
}

function closePopup (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener("mousedown", closeByOverlay);
}

function submitEditProfileHandler (event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescr.textContent = profileInput.value;
  closePopup(popupEditProfile);
}

function submitAddCardHandler (event) {
  event.preventDefault();
  closePopup(popupAddWindow);
  const newObject = {
    name: titleInput.value,
    link: linkInput.value
  }
  cardsContainer.prepend(...[createCard(newObject)]);
}

function render() {
  const card = initialCards.map(createCard);
  cardsContainer.append(...card);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  };
};

function closeByOverlay(evt) {
  const popupOpened = document.querySelector(".popup_opened");
  if (evt.target.classList.contains("popup")) {
    closePopup(popupOpened);
  };
};

function createCard (item) {
  const cloneElement = templateElement.content.cloneNode(true);
  const photoElement = cloneElement.querySelector(".element__photo");
  photoElement.src = item.link;
  photoElement.alt = item.name;
  cloneElement.querySelector(".element__title").textContent = item.name;

  const buttonLike = cloneElement.querySelector(".element__heart");
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle("element__heart_active"); 
  })

  cardsContainer.addEventListener("click", function (event) {
    const cardDelete = event.target.closest(".element__delete");
    cardDelete.closest(".element").remove();
  });

  const buttonPhoto = cloneElement.querySelector(".element__photo");
  buttonPhoto.addEventListener("click", function (event) {
    popupTitle.textContent = event.target.alt;
    popupPhoto.src = event.target.src;
    popupPhoto.alt = event.target.alt;
    openPopup(popupPhotoWindow);
  });

  return cloneElement;
}

/*Listeners*/ 
buttonEdit.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  profileInput.value = profileDescr.textContent;
  openPopup(popupEditProfile);
});
buttonAdd.addEventListener("click", () => {
  popupAddForm.reset();
  openPopup(popupAddWindow);
});
popupEditClosed.addEventListener("click", () => closePopup(popupEditProfile));
popupAddClosed.addEventListener("click", () => closePopup(popupAddWindow));
popupPhotoClosed.addEventListener("click", () => closePopup(popupPhotoWindow));
popupEditForm.addEventListener("submit", submitEditProfileHandler);
popupAddForm.addEventListener("submit", submitAddCardHandler);

render();

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.classList.add('popup__form_input-error_active');
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__form_input-error_active');
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}; 

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
    });
  });
}; 

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();