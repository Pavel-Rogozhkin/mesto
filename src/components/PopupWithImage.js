import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
  };

  open() {
    // popupTitle.textContent = item.name;
    // popupPhoto.src = item.link;
    // popupPhoto.alt = item.name;
    this._popupElement.classList.add("popup_opened");
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

  close() {
    this._popupElement.classList.remove("popup_opened");
  };

};