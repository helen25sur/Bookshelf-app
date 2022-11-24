<template>
  <v-container>
    <div class="d-flex">
      <h1 class="w-50">Books List</h1>
    <!-- <v-btn @click="getList">Get List</v-btn> -->
      <v-select
        :items="reverseYears"
        v-model="selectedYear"
        @update:menu="selectedValue"
        clearable
        label="Select year"
        variant="solo"
        density="compact"
        class="w-15 mr-3"></v-select>
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
        class="w-15"
        ></v-select>
    </div>
    <v-card
      v-for="(list) in lists" :key="list.list_id" class="my-8 elevation-10">
      <v-card-title class="text-primary">{{list.list_name}}</v-card-title>
      <v-divider color="primary" role="presentation"></v-divider>
      <v-list>
        <v-list-item
          v-for="(book) in list.books"
          :key="book.primary_isbn13">
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
            color="primary">More... </v-btn>

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
    async selectedValue() {
      console.log(this.selectedYear, this.selectedMonth);
      if (this.selectedYear && this.selectedMonth) {
        this.lists = await booksService.getAll(this.selectedYear, this.selectedMonth);
      }
    },
  },
  computed: {
    reverseYears() {
      return [...this.years].reverse();
    },
  },
};
</script>

<style scoped>
  .image-book-block {
    min-height: 150px;
  }
  .v-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    align-items: self-start;
    justify-content: center;
    gap: 20px;
  }

  .v-list-item-title {
    white-space: wpap;
  }
</style>
