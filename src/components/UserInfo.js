export class UserInfo {

  constructor({nameSelector, profileSelector}) {
    this._nameElement = document.querySelector(nameSelector);
    this._profileElement = document.querySelector(profileSelector);
    // добавить обработку аватара
  };

  setMyId(myId) {
    this._myId = myId;
  }

  getMyId() {
    return this._myId;
  }

  getUserinfo() {
    return {
      name: this._nameElement.textContent,
      profile: this._profileElement.textContent,
    }
  };

  setUserInfo(item) {
    this._nameElement.textContent = item.name;
    this._profileElement.textContent = item.link;
  };

};
