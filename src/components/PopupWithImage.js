import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupTitle = this._popupElement.querySelector(".popup__title-photo");
    this._popupPhoto = this._popupElement.querySelector(".popup__photo");
  };

  open({ link, name}) {
    this._popupTitle.textContent = name;
    this._popupPhoto.src = link;
    this._popupPhoto.alt = name;
    super.open();
  };

};
