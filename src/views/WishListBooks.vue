<template>
  <v-card>
    <h1>Wishlist Books</h1>
    <v-list>
      <v-list-item
        v-for="book in list"
        :key="book.bookID">
          <v-list-item-title>{{ book.bookID.title }}</v-list-item-title>
          <v-list-item-subtitle
            v-for="(author, idx) in book.bookID.authors"
            :key="idx">{{ author }}</v-list-item-subtitle>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

export default {
  created() {
    this.getBooksWishlist();
    console.log(this.list);
  },
  data() {
    return {
      list: {},
    };
  },
  methods: {
    async getBooksWishlist() {
      const dataBooks = await this.$store.dispatch('GET_BOOKS_WISHLIST');
      // this.list.push(dataBooks);
      console.log(dataBooks);
    },
  },
};
</script>
