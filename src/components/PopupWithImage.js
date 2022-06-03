import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
  };

  open({ link, name}) {
    const popupTitle = this._popupElement.querySelector(".popup__title-photo");
    const popupPhoto = this._popupElement.querySelector(".popup__photo");
    popupTitle.textContent = name;
    popupPhoto.src = link;
    popupPhoto.alt = name;
    super.open();
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