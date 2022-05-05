function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    const inputs = form.querySelectorAll(config.inputSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", (event) => handleFormInput(event, form, config));
    });
    const button = form.querySelector(config.buttonSelector);
    console.log(button);
    // buttons.forEach((button) => {
      toggleButton(form, button);
    // });
  });
}

function toggleButton(form, button) {
  console.log(button);
  button.disabled = !form.checkValidity();
  button.classList.toggle("popup__submit_type_disabled", !form.checkValidity());
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
  const button = form.querySelector(config.buttonSelector);
  toggleButton(form, button);
}

enableValidation(config);