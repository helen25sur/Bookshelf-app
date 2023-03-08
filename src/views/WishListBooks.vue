<template>
  <v-card class="wishlist-main">
    <h1>Wishlist Books</h1>
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
          <v-list-item-title class="text-primary text-h5">{{ book.title }}</v-list-item-title>
          <v-list-item-subtitle
            v-for="(author, idx) in book.authors"
            :key="idx"
            class="mb-2 text-h6"
            >{{ author }}</v-list-item-subtitle>
        </div>
          <v-divider></v-divider>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

export default {
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
