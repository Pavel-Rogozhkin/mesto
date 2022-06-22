import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this.popupForm = this._popupElement.querySelector(".popup__form");
    this._inputsList = this.popupForm.querySelectorAll(".popup__input");
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
    this.popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  };

  isLoading = (state, buttonSelector, loadedText = "Сохранить", loadingText = "Сохранение...") => {
    let buttonText = document.querySelector(buttonSelector).textContent;
    if (state) {
      buttonText = loadedText;
    } else {
      buttonText = loadingText;
    };
  };

  close() {
    super.close();
    this.popupForm.reset();
  };

};
