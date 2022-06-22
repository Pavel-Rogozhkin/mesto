export class UserInfo {

  constructor( { nameSelector, profileSelector, avatarSelector } ) {
    this._nameElement = document.querySelector(nameSelector);
    this._profileElement = document.querySelector(profileSelector);
    this._avatar = document.querySelector(avatarSelector);
  };

  setMyId(myId) {
    this._myId = myId;
  }

  getMyId() {
    return this._myId;
  }

  setAvatar(avatarUrl) {
    this._avatar.src = avatarUrl.name;
  }

  getUserinfo() {
    return {
      name: this._nameElement.textContent,
      about: this._profileElement.textContent,
      avatar: this._avatar.src,
    }
  };

  setUserInfo(item) {
    this._nameElement.textContent = item.name;
    this._profileElement.textContent = item.about;
    this._avatar.src = item.avatar;
  };

};
