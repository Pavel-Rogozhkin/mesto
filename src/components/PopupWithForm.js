import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._inputsList = this._popupElement.querySelectorAll(".popup__input");
  };

  _getInputValues() {
    this._values = {};
    this._inputsList.forEach( (input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    }
  )};

  close() {
    this._popupElement.classList.remove("popup_opened");
    this._popupForm.reset();
  };

};