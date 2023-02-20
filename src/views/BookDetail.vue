<template>
  <v-container class="book-detail">
    <v-card v-if="book" class="book-page mx-auto pa-6">
      <div class="card-content">
        <div class="cover-book-block">
          <img class="cover-img rounded-lg" :alt="book.title" :src="(book.imageLinks.thumbnail)" />
        </div>
        <div class="book-info">
          <h1
            class="text-primary text-h3">{{ book.title }}</h1>
          <h2 class="text-h4"
            v-for="(author, idx) in book.authors" :key="idx">
              {{ author }}</h2>
          <v-rating
            v-if="book.averageRating"
            :model-value="book.averageRating"
            color="white"
            active-color="yellow-accent-4"
            half-increments
            readonly
          ></v-rating>
          <v-chip-group>
            <v-chip
            v-for="(category, idx) in book.categories" :key="idx"
            variant="outlined"
            class="text-primary">
            {{ category }}</v-chip>
          </v-chip-group>
          <p class="book-descr">{{ book.description }}</p>
          <p v-if="book.publisher" class="text-surface-variant mt-2"
            >Publisher: {{ book.publisher }}</p>
        </div>
      </div>
      <v-card-actions>
        <v-btn class="mt-2" append-icon="mdi-list-box-outline" variant="outlined" color="primary">
        Add to Wishlist </v-btn>
        <v-btn class="mt-2" append-icon="mdi-book" variant="outlined" color="primary">
        Mark as Read </v-btn>
      </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
import BooksService from '@/services/books-service';

const booksService = new BooksService();
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  created() {
    this.getBook();
    this.getCover();
  },
  data() {
    return {
      book: null,
      cover: null,
    };
  },
  methods: {
    async getBook() {
      console.log(this.$props.id);
      this.book = await booksService.getDataByISBNFromGoogle(this.$props.id);
      console.log(this.book);
    },
    async getCover() {
      this.cover = await booksService.getDataByISBNFromOL(this.$props.id);
      console.log(this.cover);
    },
  },
};
</script>

<style scoped>
.book-detail{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.book-page {
  max-width: 70%;
  min-width: 50%;
}

.card-content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cover-book-block {
  /* min-width: 30%; */
  /* max-width: 70%; */
  width: max-content;
  text-align: center;
  margin-right: 5%;
}

.book-info {
  max-width: 70%;
  min-width: 60%;
}

.book-descr {
  max-height: 60vh;
  overflow: hidden;
}

.cover-img {
  min-width: 175px;
}
</style>
