const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__submit",
}

function enableValidation(config) {
  const form = document.querySelector(config.formSelector);
  const inputs = form.querySelectorAll(config.inputSelector);
  inputs.forEach((element) => {
    element.addEventListener("input", (event) => handleFormInput(event, form, config));
  });
  form.addEventListener("submit", (event) => handleFormSubmit(event, form));
  toggleButton(form, config);
}

function toggleButton(form, config) {
  console.log(config.buttonSelector);
  const button = document.querySelector(config.buttonSelector);
  button.disabled = !form.checkValidity();
  button.classList.toggle("popup__submit_type_disabled", !form.checkValidity());
}

function handleFormSubmit(event, form) {
  event.preventDefault();
  if (form.checkValidity()){
    alert("Form Valid!");
  } else {
    alert("Form Invalid!");
  }
}

function handleFormInput(event, form, config) {
  const input = event.target;
  const errorNode = document.querySelector(`.${input.id}-error`);
  if (input.validity.valid) {
    errorNode.textContent = "";
    input.classList.remove('popup__input_type_error');
    errorNode.classList.remove('popup__form_input-error_active');
  } else {
    errorNode.textContent = input.validationMessege;
    input.classList.add('popup__input_type_error');
    errorNode.classList.add('popup__form_input-error_active');
  }
  toggleButton(form, config);
}

enableValidation(config);