import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".popup__form");
  };

  submitDeleteCard(callBack) {
    this._callBack = callBack;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callBack();
    });
  };

};