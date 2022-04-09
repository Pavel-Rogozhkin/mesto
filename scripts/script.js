/*Variables*/ 

let popupWindow = document.querySelector(".popup");
let closePopup = popupWindow.querySelector(".popup__close");
let editButton = document.querySelector(".profile__button-edit");
let popupForm = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_name");
let profileInput = document.querySelector(".popup__input_type_profile");
let profileTitle = document.querySelector(".profile__title");
let profileDescr = document.querySelector(".profile__description");

/*Functions*/ 

function togglePopupWindow () {
  if (popupWindow.contains("popup_opened")) {
    popupWindow.classList.toggle("popup_opened");
  }
  else {
    popupWindow.classList.toggle("popup_opened");
    nameInput.value = profileTitle.textContent;
    profileInput.value = profileDescr.textContent; 
  }
}

function SubmitHandler (event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescr.textContent = profileInput.value;
  togglePopupWindow();
}

/*Listeners*/ 

editButton.addEventListener("click", togglePopupWindow);
closePopup.addEventListener("click", togglePopupWindow);
popupForm.addEventListener("submit", SubmitHandler);
