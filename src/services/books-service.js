export default class Books {
  #apiUrl = 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json';

  #apiKey = 'Si3mxXDRuV3jYysE1gCnawFbqpi7LGnk';

  // eslint-disable-next-line no-return-await
  getAll = async (year = '2022', month = '10') => await fetch(`${this.#apiUrl}?published_date=${year}-${month}-01&api-key=${this.#apiKey}`)
    .then((response) => response.json())
    .then((data) => data.results.lists.slice(0, 6));
}
