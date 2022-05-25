import { data } from "browserslist";

export default class UserInfo {

  constructor({nameSelector, profileSelector}) {
    this._nameSelector = nameSelector;
    this._profileSelector = profileSelector;
  }

  getUserinfo() {
    // data
    return data;
  }

  setUserInfo() {
    // input data to page
  }

}