import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._submitForm = submitForm;
  };

  _getInputValues() {
    // collect form data
  };

};