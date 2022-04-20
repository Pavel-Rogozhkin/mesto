/*Variables*/ 
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddWindow = document.querySelector(".popup_type_add");
const popupPhotoWindow = document.querySelector(".popup_type_photo");
const closePopupEdit = popupEditProfile.querySelector(".popup__close");
const closePopupAdd = popupAddWindow.querySelector(".popup__close_type_add");
const closePopupPhoto = popupPhotoWindow.querySelector(".popup__close_type_photo");
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
const popupForm = document.querySelector(".popup__form");
const formInput = popupForm.querySelector('.popup__input');

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

function submitAddHandler (event) {
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
popupForm.addEventListener("submit", submitEditProfileHandler);
popupAddForm.addEventListener("submit", submitAddHandler);

/*Call Functions*/ 
render();

/*SPRINT_6*/

const showInputError = (popupForm, formInput, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  console.log(`.${formInput.id}-error`);
  const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
  // Остальной код такой же
  formInput.classList.add('popup__input_type_error');
  errorElement.classList.add('form__input-error_active');
  errorElement.textContent = errorMessage;
};

const hideInputError = (popupForm, formInput) => {
  // Находим элемент ошибки
  console.log(`.${formInput.id}-error`);
  const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
  // Остальной код такой же
  formInput.classList.remove('popup__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}; 

// Функция isValid теперь принимает formElement и formInput,
// а не берёт их из внешней области видимости
const isValid = (popupForm, formInput) => {
  if (!formInput.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(popupForm, formInput, formInput.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(popupForm);
  }
}; 

const setEventListeners = (popupForm) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(popupForm.querySelectorAll('.popup__input'));

  // Обойдём все элементы полученной коллекции
  inputList.forEach((formInput) => {
    // каждому полю добавим обработчик события input
    formInput.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(popupForm, formInput);
    });
  });
}; 

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  // Переберём полученную коллекцию
  formList.forEach((popupForm) => {
    popupForm.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(popupForm);
  });
};

// Вызовем функцию
enableValidation();