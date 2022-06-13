export class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
    this._headers = {
      'Content-type': 'application/json',
      authorization: this._token,
    };
  }

  getCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
          // console.log("OK"+res);
        }
        return Promise.reject("Возникла ошибулечка");
      })
      // .then((result) => {
      //   // console.log(result);
      //   return (result);
      // })
  }

  addCard({name, link}) {
    const body = {
      name: name,
      link: link,
    };

    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Возникла ошибка");
      })
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Возникла ошибка");
    })
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'GET',
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
      return Promise.reject("Возникла ошибка");
      }
    })
  }

  editUserInfo({name, about}) {
    const body = {
      name: name,
      about: about,
    };

    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(body),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Возникла ошибка");
    })
  }    

}