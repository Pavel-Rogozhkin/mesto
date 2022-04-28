const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitSelector: ".popup__submit"
}

function enableValidation() {
  const form = document.querySelector(config.formSelector);
  const inputs = form.querySelectorAll(config.inputSelector);
  addInputListener(inputs, form, config);
  form.addEventListener("submit", (event) => handleFormSubmit(event, form));
  form.addEventListener("input", handleFormInput);
  toggleSubmit(form, config);
}

function toggleSubmit(form, config) {
  const submit = document.querySelector(config.submitSelector);
  submit.disabled = !form.checkValidity();
  submit.classList.toggle("popup__submit_type_disabled", !form.checkValidity());
}

function handleFormSubmit(event, form, config) {
  const input = event.target;
  const errorNode = document.querySelector("#${input.id}-error");
  if (input.validity.valid) {
    errorNode.textContent = "";
  } else {
    errorNode.textContent = input.validationMessege;
  }
  toggleSubmit(form, config);
}