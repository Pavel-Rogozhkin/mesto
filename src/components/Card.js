export class Card {

  constructor(item, cardSelector, handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._countLikes = item.likes.length;
    this._cardSelector = cardSelector;
    this._handlePhotoElement = handleCardClick;
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
    this._buttonLike.classList.toggle("element__heart_active");
  }

  _handleCardDelete() {
    this.element.remove();
    this.element = null;
  }

  _handleCardPhoto() {
    this._handlePhotoElement({name: this._name, link: this._link});
  }

  _setEventListeners() {
    this._buttonLike = this.element.querySelector(".element__heart");
    this._photoElement = this.element.querySelector(".element__photo");
    this._buttonLike.addEventListener('click', () => this._handleCardLike());
    this.element.querySelector(".element__delete").addEventListener('click', () => this._handleCardDelete());
    this._photoElement.addEventListener('click', () => this._handleCardPhoto());
  }

  generateCard() {
    this.element = this._getTemplateElement();
    this._setEventListeners();
    this.element.querySelector(".element__title").textContent = this._name;
    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this.element.querySelector(".element__heart_ind_count").textContent = this._countLikes;
        return this.element;
  }
}
