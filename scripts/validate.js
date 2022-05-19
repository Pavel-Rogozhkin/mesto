import { config } from "./index.js";

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(form, config);
  });
};

function setEventListeners(form, config) {
  const inputs = form.querySelectorAll(config.inputSelector);
  const button = form.querySelector(config.buttonSelector);
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      handleFormInput(event, config);
      toggleButton(form, button, config);
    });
  });
  toggleButton(form, button, config);
};

export function toggleButton(form, button, config) {
  button.disabled = !form.checkValidity();
  button.classList.toggle(config.submitDisabled, !form.checkValidity());
};

function showInputError(config, input, errorNode) {
  errorNode.textContent = input.validationMessage;
  input.classList.add(config.inputError);
  errorNode.classList.add(config.formError);
};

function hideInputError(config, input, errorNode) {
  errorNode.textContent = "";
  input.classList.remove(config.inputError);
  errorNode.classList.remove(config.formError);
};

function handleFormInput(event, config) {
  const input = event.target;
  const errorNode = document.querySelector(`.${input.id}-error`);
  if (input.validity.valid) {
    hideInputError(config, input, errorNode);
  } else {
    showInputError(config, input, errorNode);
  };
};

// enableValidation(config);