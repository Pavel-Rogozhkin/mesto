export class Popup {

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  };

  open() {
    this._popupElement.classList.add("popup_opened");
  };

  close() {
    this._popupElement.classList.remove("popup_opened");
  };

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(); 
    };
  };

  setEventListeners() {
    this._popupElement.querySelector(".popup__close").addEventListener("click", () => { this.close(); });
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      };
    });
    document.addEventListener('keydown', (evt) => { this._handleEscClose(evt); });
  };
  
};