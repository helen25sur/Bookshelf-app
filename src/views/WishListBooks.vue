<template>
  <v-card class="wishlist-main">
    <h1>Wishlist Books</h1>
    <loader-component class="d-flex my-6 mx-auto" v-if="!list" size="65" width="6" ></loader-component>
    <v-list v-if="list">
      <v-list-item
        v-for="book in list"
        :key="book.bookID"
        class="mt-2 wishlist"
        :to="{
          name: 'book',
          params: { id: book.bookID }
        }">
        <div class="wishlist-content">
        <v-img
          :width="100"
          aspect-ratio="9/16"
          cover
          :src="book.img"
          class="wishbook-cover rounded"
        ></v-img>
          <h2 style="white-space: pre-wrap;" class="text-primary text-h5">{{ book.title }}</h2>
          <p
            v-for="(author, idx) in book.authors"
            :key="idx"
            class="mb-2 text-h6"
            >{{ author }}</p>
        </div>
          <v-divider></v-divider>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import LoaderComponent from '@/components/LoaderComponent.vue';

export default {
  components: {
    LoaderComponent,
  },
  created() {
    this.getBooksWishlist();
  },
  data() {
    return {
      list: null,
    };
  },
  methods: {
    async getBooksWishlist() {
      await this.$store.commit('GET_WISHLIST');
      const dataBooks = await this.$store.getters.getStateWishlist;
      this.list = dataBooks;
    },
  },
};
</script>

<style scoped>
  .wishlist-main {
    min-width: 60vw;
    max-width: 85%;
    margin: 36px auto;
    padding: 16px 32px;
  }
  .wishlist .wishlist-content {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    gap: 10px;
  }
  .wishbook-cover {
    grid-row: 1/-1;
  }
  @media screen and (max-width: 680px) {
    .wishlist .wishlist-content {
      grid-template-columns: 1fr;
      justify-items: center;
  }
  }
</style>
