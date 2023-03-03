/* eslint-disable no-return-await */
const apiKey = process.env.VUE_APP_API_KEY_NYT;

export default class Books {
  #apiUrl = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

  #apiUrlLists = 'https://api.nytimes.com/svc/books/v3/lists/names.json';

  #googleBookUrl = 'https://www.googleapis.com/books/v1/volumes';

  // TODO: add current year & month for getAll

  // eslint-disable-next-line no-return-await
  getAll = async (year = '2023', month = '02') => await fetch(`${this.#apiUrl}?published_date=${year}-${month}-01&api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => data.results.lists);

  getOneLastList = async () => await fetch(`${this.#apiUrl}?&api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => data.results.lists[0].books);

  getListsNames = async () => await fetch(`${this.#apiUrlLists}?api-key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => data.results);

  getDataByISBNFromGoogle = async (isbn) => await fetch(`${this.#googleBookUrl}?q=isbn:${isbn}`)
    .then((response) => response.json())
    .then((data) => data.items[0].volumeInfo);

  getDataByIDFromGoogle = async (id) => await fetch(`${this.#googleBookUrl}/${id}`)
    .then((response) => response.json())
    .then((data) => data.volumeInfo);

  searchByQuery = async (value) => await fetch(`${this.#googleBookUrl}?q=${value}`)
    .then((response) => response.json())
    .then((data) => data.items)
    .catch((error) => console.error(error));
}
