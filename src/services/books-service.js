/* eslint-disable no-return-await */
export default class Books {
  #apiUrl = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

  #apiKey = 'Si3mxXDRuV3jYysE1gCnawFbqpi7LGnk';
  // TODO: add current year & month for getAll

  // eslint-disable-next-line no-return-await
  getAll = async (year = '2022', month = '10') => await fetch(`${this.#apiUrl}?published_date=${year}-${month}-01&api-key=${this.#apiKey}`)
    .then((response) => response.json())
    .then((data) => data.results.lists);

  // TODO: create transform-function for returing one common book-object
  getDataByISBNFromGoogle = async (isbn) => await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    .then((response) => response.json())
    .then((data) => data.items[0].volumeInfo);

  getDataByISBNFromOL = async (isbn) => await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
    .then((response) => response.json())
    .then((data) => data[`ISBN:${isbn}`]);

  // searchByQuery = async () => await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings&language=eng')
  //   .then((response) => response.json());
}
