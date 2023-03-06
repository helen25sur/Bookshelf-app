<template>
  <div class="banner-block"></div>
  <v-container fluid>
    <h2 class="text-h4 text-primary text-center">
      Top 5 books for all the Best Sellers
    </h2>
    <h3 class="text-h5 text-center mb-3">Combined Print & E-Book Fiction</h3>
    <div class="d-flex flex-wrap align-stretch justify-center justify-content-space-between mb-6">
    <loader-component class="d-flex my-6 mx-auto" size="65" width="6" v-if="list.length === 0"></loader-component>

      <div v-for="(book) in list" :key="book.primary_isbn13"
        class="d-flex flex-wrap justify-content-space-between align-stretch ma-4">
        <v-card :to="{
          name: 'book',
          params: { id: book.primary_isbn13 }
        }">
          <v-img :src="book.book_image" class="bg-grey-lighten-2" alt="book.book_details.title">
          </v-img>
          <v-card-title class="text-body-2 font-weight-bold text-center">
            <v-btn block class="mt-2" variant="text" color="primary"> {{ book.title }} </v-btn>
          </v-card-title>
        </v-card>
      </div>
    </div>

  </v-container>
</template>

<script>
// @ is an alias to /src
import BooksService from '@/services/books-service';
import LoaderComponent from '@/components/LoaderComponent.vue';

const booksService = new BooksService();

export default {
  name: 'HomeView',
  components: {
    LoaderComponent,
  },
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
  background-size: cover;
}

.v-btn__content {
  white-space: pre-wrap;
  max-width: 188px;
}

.v-responsive.v-img {
  width: 250px;
}

@media screen and (max-width: 760px) {
  .banner-block {
    background-image: url('../../public/img/banner-mob.png');
    height: 82vh;
    max-height: 100vh;
    background-size: cover;
    background-position: center;
  }
}

@media screen and (max-height: 660px) {
  .v-responsive.v-img {
    width: 200px;
  }
  .v-btn__content {
    max-width: 137px;
  }
}

@media screen and (max-height: 465px) {
  .v-responsive.v-img {
    width: 150px;
  }
  .v-btn__content {
    max-width: 87px;
    font-size: 12px;
  }
}
</style>
