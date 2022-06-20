export class Card {

  constructor(item, cardSelector, handlers) {
    this._name = item.name;
    this._link = item.link;
    this._owenerId = item.owner._id;
    this._cardId = item._id;
    this._myId = "073000a2c03c6157e0c0cbda";
    this._likes = item.likes;
    this._sumOfLikes = item.likes.length;
    this._cardSelector = cardSelector;
    this._handlePhotoElement = handlers.handlePhotoClick;
    this._handleCardLike = handlers.handleCardLike;
    this._handleDeleteCard = handlers.handleDeleteCard;
  }

  _renderMyLikes() {
    const likeCheck = this.isLikeMine();
    if (likeCheck) {
      this._buttonLike.classList.add("element__heart_active");
      return true;
    } else {
      return false;
    }
  };

  isLikeMine() {
    const likeCheck = this._likes.some((like) => like._id === this._myId);
    return likeCheck;
  }

  countLikes(res) {
    this._likeCount.textContent = res.likes.length;
  }

  _getTemplateElement() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector(".element")
    .cloneNode(true);
    
    return cardElement;
  }

  _handleCardLikes() {
    this._buttonLike.classList.toggle("element__heart_active");
    const like = this.isLikeMine();
    this._handleCardLike(this._cardId, like);
  }

  deleteCard() {
    this.element.remove();
    this.element = null;
  }

  _handleCardPhoto() {
    this._handlePhotoElement({name: this._name, link: this._link});
  }

  _setEventListeners() {
    this._buttonLike = this.element.querySelector(".element__heart");
    this._photoElement = this.element.querySelector(".element__photo");
    this._likeCount = this.element.querySelector(".element__heart_ind_count");
    this._buttonLike.addEventListener('click', () => this._handleCardLikes());
    this.element.querySelector(".element__delete").addEventListener('click', () => this._handleDeleteCard(this._cardId) );
    this._photoElement.addEventListener('click', () => this._handleCardPhoto());
  }

  generateCard() {
    this.element = this._getTemplateElement();
    this._setEventListeners();
    if (this._owenerId !== "073000a2c03c6157e0c0cbda"){
      this.element.querySelector('.element__delete').remove();
    }
    this.element.querySelector(".element__title").textContent = this._name;
    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._likeCount.textContent = this._sumOfLikes;
    this._renderMyLikes();
    return this.element;
  }
}
