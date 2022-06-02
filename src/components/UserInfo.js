export class UserInfo {

  constructor({nameSelector, profileSelector}) {
    this._nameElement = document.querySelector(nameSelector);
    this._profileElement = document.querySelector(profileSelector);
  };

  getUserinfo() {
    return {
      name: this._nameElement.textContent,
      profile: this._profileElement.textContent
    }
  };

  setUserInfo(item) {
    this._nameElement.textContent = item.name;
    this._profileElement.textContent = item.profile;
  };

};