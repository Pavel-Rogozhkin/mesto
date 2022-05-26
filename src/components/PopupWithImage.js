import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = popupSelector;
  };

  open() {
    // popupTitle.textContent = item.name;
    // popupPhoto.src = item.link;
    // popupPhoto.alt = item.name;
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose(evt));
  };

  setEventListeners() {
    this._popupSelector.addEventListener("click", () => {
      this.close();
    });
    this._popupSelector.addEventListener("mousedown", () => {
      if (this._popupSelector.classList.contains("popup")) {
        this.close();
      };
    });
    // submitListenerHandler....
  };

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose(evt));
    // event.preventDefault();
  };

};