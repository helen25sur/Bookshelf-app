<template>
  <v-container>
    <div class="d-flex flex-column wrap">
      <h1 class="">Top 5 books for all the Best Sellers lists for specified date</h1>
    <!-- <v-btn @click="search">Search</v-btn> -->
    <div class="block-selects d-md-flex wrap">
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
    </div>
    <v-card
      v-for="(list) in lists" :key="list.list_id" class="my-8 elevation-10">
      <v-card-title class="text-primary">{{list.list_name}}</v-card-title>
      <v-divider color="primary" role="presentation"></v-divider>
      <v-list>
        <v-list-item
          v-for="(book) in list.books"
          :key="book.primary_isbn13">
          <v-avatar
            class="rank"
            size="32"
            color="primary"
            :content="book.rank">{{book.rank}}</v-avatar>
          <div class="image-book-block">
            <img class="w-100 rounded-lg" :alt="book.title"
              :src="book.book_image" />
          </div>
          <div>
            <v-list-item-title class="text-primary">{{ book.title }}</v-list-item-title>
            <v-list-item-title>{{ book.author }}</v-list-item-title>
            <p>{{ book.description }}</p>
            <p class="text-surface-variant mt-2">Publisher: {{ book?.publisher }}</p>
          </div>
          <v-btn
            class="mt-2"
            append-icon="mdi-book"
            variant="outlined"
            color="primary"
            :to="{name: 'book',
                 params: {id: book.primary_isbn13 }}">More... </v-btn>

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
    // this.lists = await booksService.getAll();
  },
  data() {
    return {
      lists: [],
      years: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
        '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
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
    };
  },
  methods: {
    async getList() {
      this.lists = await booksService.getAll();
      console.log(this.lists);
    },
    // TODO: save selects value
    async selectedValue() {
      console.log(this.selectedYear, this.selectedMonth);
      if (this.selectedYear && this.selectedMonth) {
        this.lists = await booksService.getAll(this.selectedYear, this.selectedMonth);
      }
    },
    // async search() {
    //   const data = await booksService.searchByQuery();
    //   console.log(data);
    // },
  },
  computed: {
    reverseYears() {
      return [...this.years].reverse();
    },
  },
};
</script>

<style scoped>
  .block-selects {
    min-width: 50%;
    margin-left: auto;
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
</style>
