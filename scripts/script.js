/*Variables*/ 
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddWindow = document.querySelector(".popup_type_add");
const popupPhotoWindow = document.querySelector(".popup_type_photo");
const closePopupEdit = popupEditProfile.querySelector(".popup__close");
const closePopupAdd = popupAddWindow.querySelector(".popup__close_type_add");
const closePopupPhoto = popupPhotoWindow.querySelector(".popup__close_type_photo");
const popupEditForm = document.querySelector(".popup__form_type_edit");
const popupAddForm = document.querySelector(".popup__form_type_add");
const nameInput = document.querySelector(".popup__input_type_name");
const profileInput = document.querySelector(".popup__input_type_profile");
const titleInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");
const editButton = document.querySelector(".profile__button-edit");
const addButton = document.querySelector(".profile__button-add");
const profileTitle = document.querySelector(".profile__title");
const profileDescr = document.querySelector(".profile__description");
const cardTitle = document.querySelector(".element__title");
const cardLink = document.querySelector(".element__photo");
const elementsList = document.querySelector(".elements__list");
const templateElement = document.querySelector(".templateElement");
const photoButton = elementsList.querySelector(".element_photo");
const popupTitle = document.querySelector(".popup__title-photo");
const popupPhoto = document.querySelector(".popup__photo");

/*Functions*/ 
function openPopup (popup) {
  popup.classList.add("popup_opened");
}

function closePopup (popup) {
  popup.classList.remove("popup_opened");
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
  elementsList.prepend(...[createCard(newObject)]);
}

function render() {
  const card = initialCards.map(createCard);
  elementsList.append(...card);
}

function createCard (item) {
  const cloneElement = templateElement.content.cloneNode(true);
  cloneElement.querySelector(".element__photo").src = item.link;
  cloneElement.querySelector(".element__photo").alt = item.name;
  cloneElement.querySelector(".element__title").textContent = item.name;

  const buttonLike = cloneElement.querySelector(".element__heart");
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle("element__heart_active"); 
  })

  elementsList.addEventListener("click", function (event) {
    const cardDelete = event.target.closest(".element__delete");
    cardDelete.closest(".element").remove();
  });

  const buttonPhoto = cloneElement.querySelector(".element__photo");
  buttonPhoto.addEventListener("click", function (event) {
    openPopup(popupPhotoWindow);
    popupTitle.textContent = event.target.alt;
    popupPhoto.src = event.target.src;
    popupPhoto.alt = event.target.alt;
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key == "Escape") {
      const popupOpened = document.querySelector(".popup_opened");
      if (!(popupOpened === null)) {
        closePopup(popupOpened);
      };
    };
  }); 

  document.addEventListener("mousedown", function (evt) {
    const popupOpened = document.querySelector(".popup_opened");
    if (evt.target.classList.contains("popup")) {
      closePopup(popupOpened);
    }
  });

  return cloneElement;
}

/*Listeners*/ 
editButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  profileInput.value = profileDescr.textContent;
});
addButton.addEventListener("click", () => {
  openPopup(popupAddWindow);
  popupAddForm.reset();
});
closePopupEdit.addEventListener("click", () => closePopup(popupEditProfile));
closePopupAdd.addEventListener("click", () => closePopup(popupAddWindow));
closePopupPhoto.addEventListener("click", () => closePopup(popupPhotoWindow));
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