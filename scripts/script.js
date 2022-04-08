/*Variables*/ 

let PopupWindow = document.querySelector(".popup");
let ClosePopup = PopupWindow.querySelector(".popup__close");
let EditButton = document.querySelector(".profile__button-edit");
let PopupForm = document.querySelector(".popup__form");
let NameInput = document.querySelector(".popup__form_type_name");
let ProfileInput = document.querySelector(".popup__form_type_profile");
let ProfileTitle = document.querySelector(".profile__title");
let ProfileDescr = document.querySelector(".profile__description");

/*Functions*/ 

function togglePopupWindow () {
  PopupWindow.classList.toggle("popup__active");
  NameInput.value = ProfileTitle.textContent;
  ProfileInput.value = ProfileDescr.textContent; 
}

function SubmitHandler (event) {
  event.preventDefault();
  ProfileTitle.textContent = NameInput.value;
  ProfileDescr.textContent = ProfileInput.value;
  togglePopupWindow();
}

/*Listeners*/ 

EditButton.addEventListener("click", togglePopupWindow);
ClosePopup.addEventListener("click", togglePopupWindow);
PopupForm.addEventListener("submit", SubmitHandler);
