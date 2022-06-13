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
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Возникла ошибка");
      })
  }

  addCard({name, link}) {
    const body = {
      name: name,
      link: link,
    };

    return fetch(this._url, {
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
    return fetch(`${this._url}/${cardId}`, {
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

}