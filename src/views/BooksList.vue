<template>
  <v-container>
    <div class="d-flex flex-column wrap">
      <h1 class="">Top 15 books for all the Best Sellers lists for specified date</h1>
    <div class="block-selects d-md-flex wrap align-center">
    <v-form
      @submit.prevent="addSearchQueryToPath"
      method="GET" class="search-block d-flex me-auto">
      <v-text-field
        @keyup.enter="addSearchQueryToPath"
        @click:clear="closeSearchResults"
        @blur="blurCloseResults"
        v-model="searchQuery"
        label="Search"
        variant="solo"
        density="compact"
        clearable
        autocomplete="on"
      ></v-text-field>
      <v-btn
        type="submit"
        class="mx-2"
        prepend-icon="mdi-magnify"
        density="default"
      >Search</v-btn>
    </v-form>
    <div class="selects d-md-flex w-33 wrap align-center mr-md-3">
      <v-select
        :items="[
          'Combined Print & E-Book Fiction',
          'Combined Print & E-Book Nonfiction',
          'Hardcover Fiction',
          'Hardcover Nonfiction',
          'Paperback Trade Fiction',
          'Paperback Nonfiction',
          'Advice, How-To and Miscellaneous',
          'Children’s Middle Grade Hardcover',
          'Children’s Picture Books',
          'Children’s & Young Adult Series',
          'Young Adult Hardcover',
          'Audio Fiction',
          'Audio Nonfiction',
          'Business',
          'Graphic Books and Manga',
          'Mass Market',
          'Middle Grade Paperback',
          'Young Adult Paperback',
          ]"
        v-model="selectedLists"
        label="Select lists"
        multiple
        clearable
        variant="solo"
        density="compact"
      ></v-select>
      </div>
        <v-text-field
        v-model="date"
        @change="selectedValue"
        variant="solo"
        density="compact"
        type="date"
        name="data-list"
        id="data-list"
        label="Pick the date">
         </v-text-field>
    </div>
    </div>
    <v-list
      :class="isHidden"
      :lines="false"
      item-props
      fluid>
        <h3 class="text-primary">Search Results</h3>
        <v-list-item active-color="primary" v-for="item in searchResults" :key="item.id" :to="{
        name: 'book',
        params: { id: item.volumeInfo.industryIdentifiers?.[0]?.identifier || item.id }
      }">
        <v-list-item-title>{{ item.volumeInfo.title }}</v-list-item-title>
        <v-list-item-subtitle class="mb-2">
          {{ item.volumeInfo.authors?.join(', ') || 'Unknown Author' }}
        </v-list-item-subtitle>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
    <loader-component class="d-flex my-6 mx-auto" v-if="filteredLists.length === 0" size="65" width="6" ></loader-component>
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
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import BooksService from '@/services/books-service';
import LoaderComponent from '@/components/LoaderComponent.vue';

const booksService = new BooksService();

export default {
  components: {
    LoaderComponent,
  },
  created() {
    this.getList();
    // console.log(this.listsNames);
    this.$router.afterEach((to) => {
      this.searchQuery = to.query.q;
    });
    if (this.$route.query.q) {
      this.searchQuery = this.$route.query.q;
    }
  },
  data: () => ({
    date: null,
    lists: [],
    listsNames: [],
    selectedLists: null,
    searchQuery: null,
    searchResults: [],
    isHidden: 'd-none',
  }),
  methods: {
    async getList() {
      this.lists = await booksService.getAll();
      // this.listsNames = await booksService.getListsNames();
    },
    // TODO: save selects value
    async selectedValue() {
      if (this.date) {
        this.lists = await booksService.getAll(this.date);
      }
    },
    async search() {
      if (this.searchQuery) {
        this.searchResults = await booksService.searchByQuery(this.searchQuery);
        this.isHidden = 'd-grid search-result-block';
      }
    },
    blurCloseResults() {
      if (!this.searchQuery) {
        this.closeSearchResults();
      }
    },
    closeSearchResults() {
      this.isHidden = 'd-none';
      this.$router.push({ path: '/Bookshelf-app/books', query: { q: '' } });
    },
    addSearchQueryToPath() {
      this.$router.push({ path: '/Bookshelf-app/books', query: { q: this.searchQuery } });
    },
  },
  computed: {
    reverseYears() {
      return [...this.years].reverse();
    },
    // listsNamesSelect() {
    //   const newArr = [];
    //   // console.log(this.listsNames);
    //   // this.listsNames.forEach((n) => newArr.push(n.display_name));
    //   return newArr;
    // },
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

@media screen and (max-height: 520px) {
  .book-cards-section {
    grid-template-columns: repeat(auto-fill, 260px);
  }
}

@media screen and (max-height: 460px) {
  .book-cards-section {
    grid-template-columns: repeat(auto-fill, 240px);
  }
}

@media screen and (max-height: 410px) {
  .book-cards-section {
    grid-template-columns: repeat(auto-fill, 220px);
  }
}

@media screen and (max-height: 380px) {
  .book-cards-section {
    grid-template-columns: repeat(auto-fill, 200px);
  }
}
</style>
