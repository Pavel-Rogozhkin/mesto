/*Variables*/ 

let PopupWindow = document.querySelector(".popup");
let ClosePopup = PopupWindow.querySelector(".popup__close");
let EditButton = document.querySelector(".profile_button_edit");
let PopupContent = document.querySelector(".popup__content");
let NameInput = document.querySelector(".popup__name");
let ProfileInput = document.querySelector(".popup__profile");
let SubmitButton = document.querySelector(".popup__submit");
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
PopupContent.addEventListener("submit", SubmitHandler);
SubmitButton.addEventListener("click", SubmitHandler);