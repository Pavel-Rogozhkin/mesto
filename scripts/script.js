/*Variables*/ 

const popupWindow = document.querySelector(".popup_type_edit");
const popupAddWindow = document.querySelector(".popup_type_add");
const popupPhotoWindow = document.querySelector(".popup_type_photo");
const closePopup = popupWindow.querySelector(".popup__close");
const closePopupAdd = popupAddWindow.querySelector(".popup__close_type_add");
const closePopupPhoto = popupPhotoWindow.querySelector(".popup__close_type_photo");
const popupForm = document.querySelector(".popup__form");
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
const popupTitle = document.querySelector(".popup__title_photo");
const popupPhoto = document.querySelector(".popup__photo");

// Cards:
const initialCards = [
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

render();

/*Functions*/ 

function togglePopupWindow () {
  if (!popupWindow.classList.contains("popup_opened")) {
    popupWindow.classList.toggle("popup_opened");
    nameInput.value = profileTitle.textContent;
    profileInput.value = profileDescr.textContent; 
  }
  else {
    popupWindow.classList.toggle("popup_opened");
  }
}

function togglePopupAddWindow () {
  popupAddWindow.classList.toggle("popup_opened");
}

function submitHandler (event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescr.textContent = profileInput.value;
  togglePopupWindow();
}

function submitAddHandler (event) {
  event.preventDefault();
  togglePopupAddWindow();
  const newObject = {
    name: titleInput.value,
    link: linkInput.value
  }
  elementsList.prepend(...[getElement(newObject)]);
}

function render() {
  const html = initialCards.map(getElement);
  elementsList.append(...html);
}

function getElement (item) {
  const cloneElement = templateElement.content.cloneNode(true);
  cloneElement.querySelector(".element__photo").src = item.link;
  cloneElement.querySelector(".element__photo").alt = item.name;
  cloneElement.querySelector(".element__title").textContent = item.name;
  return cloneElement;
}

function togglePopupPhotoWindow () {
  popupPhotoWindow.classList.toggle("popup_opened");
}

/*Listeners*/ 

editButton.addEventListener("click", togglePopupWindow);
addButton.addEventListener("click", togglePopupAddWindow);
closePopup.addEventListener("click", togglePopupWindow);
closePopupAdd.addEventListener("click", togglePopupAddWindow);
closePopupPhoto.addEventListener("click", togglePopupPhotoWindow);
popupForm.addEventListener("submit", submitHandler);
popupAddForm.addEventListener("submit", submitAddHandler);

//  CARD__DELETE  --------------------------------------------------------

elementsList.addEventListener("click", function (event) {
  const cardDelete = event.target.closest(".element__delete");
  if (!cardDelete) {
    return;
  }
  cardDelete.parentElement.remove();
});

//  CAERD__LIKE_AND_PHOTO  -----------------------------------------------

elementsList.addEventListener("click", function (event) {
  console.log(event.target);
  console.log(event.target.classList);
  console.log(event.target.classList.value);
  if (event.target.classList.contains("element__photo")) {
    popupPhotoWindow.classList.toggle("popup_opened");
    popupTitle.textContent = event.target.alt;
    popupPhoto.src = event.target.src;
    console.log("photo");
  }
  if (event.target.classList.contains("element__heart")) {
    const cardLike = event.target.closest(".element__heart");
    cardLike.classList.toggle("element__heart_active");
    console.log("heart");
  } 
});