export class FormValidator {

  constructor (formElement, config) {
    this._config = config;
    this._formElement = formElement;
    this._inputSelector = this._config.inputSelector;
    this._buttonSelector = this._config.buttonSelector;
    this._submitDisabled = this._config.submitDisabled;
    this._inputError = this._config.inputError;
    this._formError = this._config.formError;
  };

  enableValidation() {
    this._setEventListeners(this._formElement, this._config);
  };

  _setEventListeners() {
    this._inputs = this._formElement.querySelectorAll(this._inputSelector);
    this._button = this._formElement.querySelector(this._buttonSelector);
    this._inputs.forEach((input) => {
      input.addEventListener("input", (event) => {
        this._handleFormInput(event);
        this.toggleButton();
      });
    });
    this.toggleButton();
  };

  toggleButton() {
    this._button.disabled = !this._formElement.checkValidity();
    this._button.classList.toggle(this._submitDisabled, !this._formElement.checkValidity());
  };

  _handleFormInput(event) {
    event.preventDefault();
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
  
};
