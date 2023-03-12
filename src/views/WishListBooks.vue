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
          <v-btn
            @click.stop.prevent="closeDialog = true"
            variant="outlined"
            size="small"
            icon="mdi-close-thick"
            color="error"
            position="absolute"
            class="btn-close"></v-btn>
          <v-divider></v-divider>
        </v-list-item>
    </v-list>
  </v-card>

  <v-dialog
      v-model="closeDialog"
      min-width="350"
      max-width="600"
    >
      <v-card>
        <p class="text-body-1 pa-3">
          Would you like to delete this book from Wishlist?
        </p>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="closeDialog = false"
          >
            No
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="close"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      closeDialog: false,
    };
  },
  methods: {
    async getBooksWishlist() {
      await this.$store.commit('GET_WISHLIST');
      const dataBooks = await this.$store.getters.getStateWishlist;
      this.list = dataBooks;
    },
    close() {
      this.closeDialog = true;
      console.log('Close');
      this.closeDialog = false;
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
  .btn-close {
    top: 6px;
    right: 24px;
    transition: background-color 0.3s ease-in;
    z-index: 10;
  }
  .btn-close:hover {
    background-color: #cf667940;
  }
  @media screen and (max-width: 680px) {
    .wishlist .wishlist-content {
      grid-template-columns: 1fr;
      justify-items: center;
  }
  }
</style>
