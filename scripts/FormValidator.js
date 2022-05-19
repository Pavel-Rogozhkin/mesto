export const config = {
  popupOpened: ".popup_opened",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__submit",
  submitDisabled: "popup__submit_type_disabled",
  inputError: "popup__input_type_error",
  formError: "popup__form-input-error",
}

export class FormValidator {

  constructor (formElement, config) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
    this._submitDisabled = config.submitDisabled;
    this._inputError = config.inputError;
    this._formError = config.formError;
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {e.preventDefault()});
    this._setEventListeners(this._formElement, config);
  };

  _setEventListeners() {
    const inputs = this._formElement.querySelectorAll(this._inputSelector);
    const button = this._formElement.querySelector(this._buttonSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", (event) => {
        this._handleFormInput(event);
        this._toggleButton(this._formElement, button, config);
      });
    });
    this._toggleButton(this._formElement, button, config);
  };

  _toggleButton() {
    const button = this._formElement.querySelector(this._buttonSelector);
    button.disabled = !this._formElement.checkValidity();
    button.classList.toggle(this._submitDisabled, !this._formElement.checkValidity());
  };

  _handleFormInput(event) {
    const input = event.target;
    const errorNode = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
      this._hideInputError(input, errorNode);
    } else {
      this._showInputError(input, errorNode);
    };
  };

  _showInputError(input, errorNode) {
    errorNode.textContent = input.validationMessage;
    input.classList.add(this._inputError);
    errorNode.classList.add(this._formError);
  };

  _hideInputError(input, errorNode) {
    errorNode.textContent = "";
    input.classList.remove(this._inputError);
    errorNode.classList.remove(this._formError);
  };
}