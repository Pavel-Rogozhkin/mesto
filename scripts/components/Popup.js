export default class Popup {

  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEsc);
    this._popupSelector.addEventListener("mousedown", closeByOverlay);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEsc);
    this._popupSelector.removeEventListener("mousedown", closeByOverlay);
  }

  _handleEscClose() {

  }

  setEventListeners() {

  }
  
}