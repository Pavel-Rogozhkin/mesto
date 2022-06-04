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

};