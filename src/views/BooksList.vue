<template>
  <v-container>
    <div class="d-flex flex-column wrap">
      <h1 class="">Top 5 books for all the Best Sellers lists for specified date</h1>
    <div class="block-selects d-md-flex wrap align-center">
    <v-form
      @submit.prevent="search"
      method="GET" class="search-block d-flex me-auto">
      <v-text-field
        @keyup.enter="search"
        @click:clear="closeSearchResults"
        v-model="searchQuery"
        label="Search"
        variant="solo"
        density="compact"
        clearable
      ></v-text-field>
      <v-btn
        type="submit"
        class="mx-2"
        prepend-icon="mdi-magnify"
        density="default"
      >Search</v-btn>
    </v-form>
    <div class="selects d-md-flex wrap align-center">
      <v-select
        :items="listsNamesSelect"
        v-model="selectedLists"
        label="Select lists"
        multiple
        clearable
        variant="solo"
        density="compact"
        class="mr-md-3"
      ></v-select>
      <v-select
        :items="reverseYears"
        v-model="selectedYear"
        @update:menu="selectedValue"
        clearable
        label="Select year"
        variant="solo"
        density="compact"
        class="mr-md-3"></v-select>
      <v-select
        :items="months"
        item-title="label"
        item-value="value"
        v-model="selectedMonth"
        @update:menu="selectedValue"
        clearable
        label="Select month"
        variant="solo"
        density="compact"
        class=""
        ></v-select>
      </div>
        <!-- <v-text-field
        variant="solo"
        prepend-icon="mdi-event"
        density="compact"
        type="date"
        name="data-list"
        id="data-list"
        label="Pick the date"> </v-text-field> -->
    </div>
    </div>
    <v-list
      :class="isHidden"
      :lines="false"
      item-props>
        <h3 class="text-primary">Search Results</h3>
        <v-list-item
          active-color="primary"
          v-for="item in searchResults"
          :key="item.id"
          :to="{name: 'book',
              params: {id: item.id}}">
          <v-list-item-title>{{ item.volumeInfo.title }}</v-list-item-title>
          <v-list-item-subtitle class="mb-2">{{ item.volumeInfo.authors?.join(', ')}}</v-list-item-subtitle>
        <v-divider></v-divider>
        </v-list-item>
    </v-list>
    <v-card
      v-for="(list) in filteredLists" :key="list.list_id" class="book-section my-8 elevation-10">
      <v-card-title class="text-primary">{{list.display_name}}</v-card-title>
      <v-divider color="primary" role="presentation"></v-divider>
      <v-list class="book-cards-section">
        <v-list-item
          v-for="(book) in list.books"
          :key="book.primary_isbn13"
          :to="{name: 'book',
                 params: {id: book.primary_isbn13 }}">
          <v-avatar
            class="rank"
            size="32"
            color="primary"
            :content="book.rank">{{book.rank}}</v-avatar>
            <div class="card-book-content">
              <div class="image-book-block">
                <img class="w-100 rounded-lg" :alt="book.title"
                :src="book.book_image" />
              </div>
              <div>
                <v-list-item-title class="text-primary">{{ book.title }}</v-list-item-title>
                <v-list-item-title>{{ book.author }}</v-list-item-title>
                <p class="book-descr">{{ book.description }}</p>
                <p class="text-surface-variant mt-2">Publisher: {{ book?.publisher }}</p>
              </div>
            </div>
          <!-- <v-btn
            class="mt-2"
            append-icon="mdi-book"
            variant="outlined"
            color="primary"
            :to="{name: 'book',
                 params: {id: book.primary_isbn13 }}">More... </v-btn> -->
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import BooksService from '@/services/books-service';

const booksService = new BooksService();

export default {
  created() {
    this.getList();
    this.$router.afterEach((to) => {
      this.searchQuery = to.query.q;
    });
    if (this.$route.query.q) {
      this.searchQuery = this.$route.query.q;
    }
  },
  data: () => ({
    // date: new Date().toISOString().substr(0, 10),
    // menu1: false,
    lists: [],
    listsNames: [],
    years: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
      '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    months: [
      { value: '01', label: 'January' },
      { value: '02', label: 'February' },
      { value: '03', label: 'March' },
      { value: '04', label: 'April' },
      { value: '05', label: 'May' },
      { value: '06', label: 'June' },
      { value: '07', label: 'July' },
      { value: '08', label: 'August' },
      { value: '09', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' },
    ],
    selectedYear: null,
    selectedMonth: null,
    selectedLists: null,
    searchQuery: null,
    searchResults: [],
    isHidden: 'd-none',
  }),
  methods: {
    async getList() {
      this.lists = await booksService.getAll();
      this.listsNames = await booksService.getListsNames();
    },
    // TODO: save selects value
    async selectedValue() {
      if (this.selectedYear && this.selectedMonth) {
        this.lists = await booksService.getAll(this.selectedYear, this.selectedMonth);
      }
    },
    async search() {
      if (this.searchQuery) {
        this.searchResults = await booksService.searchByQuery(this.searchQuery);
        this.isHidden = 'd-grid search-result-block';
        this.$router.push({ path: '/Bookshelf-app/books', query: { q: this.searchQuery } });
      }
    },
    closeSearchResults() {
      this.isHidden = 'd-none';
      this.$router.push({ path: '/Bookshelf-app/books', query: { q: '' } });
    },
  },
  computed: {
    reverseYears() {
      return [...this.years].reverse();
    },
    listsNamesSelect() {
      const newArr = [];
      this.listsNames.forEach((n) => newArr.push(n.display_name));
      return newArr;
    },
    filteredLists() {
      // eslint-disable-next-line max-len
      return this.selectedLists?.length > 0 ? [...this.lists].filter((l) => this.selectedLists.includes(l.display_name)) : this.lists;
    },
  },
  watch: {
    searchQuery() {
      this.search();
    },
  },
};
</script>

<style scoped>
  .block-selects {
    width: 100%;
  }
  .search-block {
    min-width: 40%;
    margin-right: auto;
  }
  .search-block .v-btn.v-btn--density-default {
    height: calc(var(--v-btn-height) + 6px);
  }
  .selects>.v-input {
    min-width: 200px;
  }
  .image-book-block {
    min-height: 150px;
  }
  .v-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    align-items: self-start;
    justify-content: center;
    gap: 20px;
  }

  .v-list-item-title {
    white-space: wrap;
  }

  .v-avatar.v-avatar--density-default {
    position: absolute;
    top: 15px;
    left: 25px;
    font-weight: bold;
  }
  .v-list-item-title {
    white-space: pre-wrap;
  }
  .search-result-block {
    grid-template-columns: 1fr;
    align-items: start;
    justify-content: start;
    padding-left: 26px;
  }
</style>
