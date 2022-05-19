// Cards:
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export class Card {

  constructor(item, templateElement, handlePhotoClick) {
    this._name = item.name;
    this._link = item.link;
    this._templateElement = templateElement;
    this._handlePhotoElement = handlePhotoClick;
  }

  _getTemplateElement() {
    const cardElement = this._templateElement
    .content
    .querySelector(".element")
    .cloneNode(true);

    return cardElement;
  }

  _handleCardLike() {
    this.element.querySelector(".element__heart").classList.toggle("element__heart_active");
  }

  _handleCardDelete() {
    this.element.remove();
  }

  _handleCardPhoto() {
    this._handlePhotoElement({name: this._name, link: this._link});
  }

  _setEventListeners() {
    this.element.querySelector(".element__heart").addEventListener('click', () => this._handleCardLike());
    this.element.querySelector(".element__delete").addEventListener('click', () => this._handleCardDelete());
    this.element.querySelector(".element__photo").addEventListener('click', () => this._handleCardPhoto());
  }

  generateCard() {
    this.element = this._getTemplateElement();
    this._setEventListeners();
    this.element.querySelector(".element__title").textContent = this._name;
    this.element.querySelector(".element__photo").src = this._link;
    this.element.querySelector(".element__photo").alt = this._name;
    return this.element;
  }
}