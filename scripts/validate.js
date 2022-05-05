function enableValidation(config) {
  const popupOpened = document.querySelector(config.popupOpened);
  if (popupOpened) {
    const form = popupOpened.querySelector(config.formSelector);
    const button = form.querySelector(config.buttonSelector);
    if (form) {
      const inputs = form.querySelectorAll(config.inputSelector);
      inputs.forEach((element) => {
        element.addEventListener("input", (event) => handleFormInput(event, form, config));
      });
      form.addEventListener("submit", (event) => handleFormSubmit(event));
      toggleButton(form, button);
    }
  }
}

function toggleButton(form, button) {
  button.disabled = !form.checkValidity();
  button.classList.toggle("popup__submit_type_disabled", !form.checkValidity());
}

function handleFormSubmit(event) {
  event.preventDefault();
}

function handleFormInput(event, form, config) {
  const input = event.target;
  const errorNode = document.querySelector(`.${input.id}-error`);
  if (input.validity.valid) {
    errorNode.textContent = "";
    input.classList.remove('popup__input_type_error');
    errorNode.classList.remove('popup__form-input-error');
  } else {
    errorNode.textContent = input.validationMessage;
    input.classList.add('popup__input_type_error');
    errorNode.classList.add('popup__form-input-error');
  }
  toggleButton(form, config);
}

enableValidation(config);