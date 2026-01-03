/* eslint-disable no-return-await */
const apiKey = process.env.VUE_APP_API_KEY_NYT;
const apiKeyGB = process.env.VUE_APP_API_KEY_GB;

export default class Books {
  #apiUrl = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

  // #apiUrlLists = 'https://api.nytimes.com/svc/books/v3/lists/names.json';

  #googleBookUrl = 'https://www.googleapis.com/books/v1/volumes';

  // TODO: add current year & month for getAll

  getAll = (date = 'current') => fetch(`${this.#apiUrl}?published_date=${date}&api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => data.results.lists);
    // .then((data) => console.log(data.results.lists));

  getOneLastList = () => fetch(`${this.#apiUrl}?&api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => data.results.lists[0].books);

  // getListsNames = () => fetch(`${this.#apiUrlLists}?api-key=${apiKey}`)
  //   .then((response) => response.json())
  //   .then((data) => data.results);

  getDataByISBNFromGoogle = (isbn) => fetch(`${this.#googleBookUrl}?q=isbn:${isbn}&key=${apiKeyGB}`)
    .then((response) => response.json())
    .then((data) => data.items[0].volumeInfo);
    // .then((data) => console.log(data, isbn));

  getDataByIDFromGoogle = (id) => fetch(`${this.#googleBookUrl}/${id}&key=${apiKeyGB}`)
    .then((response) => response.json())
    // .then((data) => data.volumeInfo);
    .then((data) => console.log(data.volumeInfo));

  searchByQuery = (value) => fetch(`${this.#googleBookUrl}?q=${value}`)
    .then((response) => response.json())
    .then((data) => data.items)
    .catch((error) => console.error(error));
}
