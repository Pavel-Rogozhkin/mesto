import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  };

  _getInputValues() {
    //data
  };

  setEventListeners() {
    this._popupElement.querySelector(".popup__close").addEventListener("click", () => { this.close(); });
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      };
    });
    document.addEventListener('keydown', (evt) => { this._handleEscClose(evt); });
    this._popupForm.addEventListener("submit", () => { this._submitForm });
  };

  close() {
    this._popupElement.classList.remove("popup_opened");
    this._popupForm.reset();
  };

};