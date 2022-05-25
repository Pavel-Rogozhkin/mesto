export class Card {

  constructor(item, cardSelector, handlePhotoClick) {
    this._name = item.name;
    this._link = item.link;
    this._cardSelector = cardSelector;
    this._handlePhotoElement = handlePhotoClick;
  }

  _getTemplateElement() {
    const cardElement = document
    .querySelector(this._cardSelector)
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