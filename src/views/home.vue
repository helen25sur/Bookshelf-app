<template>
  <div class="banner-block"></div>
    <h2 class="text-h4 text-primary text-center">
      Top 5 books for all the Best Sellers
    </h2>
    <h3 class="text-h5 text-center mb-3">Combined Print & E-Book Fiction</h3>
  <v-row>
    <v-col
      v-for="(book) in list"
      :key="book.primary_isbn13"
      class="d-flex flex-wrap justify-center align-start align-content-space-between"
    >
    <v-card>
      <v-img
        :src="book.book_image"
        width="250"
        class="bg-grey-lighten-2"
        alt="book.book_details.title"
      >
      </v-img>
      <v-card-title class="text-body-2 font-weight-bold text-center">
        <v-btn
            block
            class="mt-2"
            variant="text"
            color="primary"
            :to="{name: 'book',
                 params: {id: book.primary_isbn13 }}"> {{ book.title }} </v-btn>
      </v-card-title>
    </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import BooksService from '@/services/books-service';

const booksService = new BooksService();

export default {
  name: 'HomeView',
  components: {},
  created() {
    this.getList();
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getList() {
      this.list = await booksService.getOneLastList();
    },
  },
};
</script>

<style>
  .banner-block {
    width: 100%;
    min-height: 29vh;
    max-height: 70vh;
    background-image: url('../../public/img/banner.png');
    background-repeat: no-repeat;
    background-position: top center;
  }

  .v-btn__content {
    white-space: pre-wrap;
    max-width: 188px;
  }

  @media screen and (max-width: 760px) {
    .banner-block {
      background-image: url('../../public/img/banner-mob.png');
      height: 82vh;
      max-height: 100vh
    }
  }
</style>
