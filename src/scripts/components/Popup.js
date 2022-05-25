export default class Popup {

  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  };

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose(evt));
  };

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose(evt));
  };

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(); 
    };
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
  };
  
}