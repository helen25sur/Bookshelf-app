<template>
  <v-card class="readlist-main">
    <h1>Read Books</h1>
    <loader-component class="d-flex my-6 mx-auto" v-if="!list" size="65" width="6" ></loader-component>
    <v-list v-if="list">
      <v-list-item
        v-for="book in list"
        :key="book.bookID"
        class="mt-2 readlist"
        :to="{
          name: 'book',
          params: { id: book.bookID }
        }">
        <div class="readlist-content">
        <v-img
          :width="100"
          aspect-ratio="9/16"
          cover
          :src="book.img"
          class="readbook-cover rounded"
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
    this.getBooksReadList();
  },
  data() {
    return {
      list: null,
    };
  },
  methods: {
    async getBooksReadList() {
      await this.$store.commit('GET_READLIST');
      const dataBooks = await this.$store.getters.getStateReadlist;
      this.list = dataBooks;
      console.log(this.list);
    },
  },
};
</script>

<style scoped>
  .readlist-main {
    min-width: 60vw;
    max-width: 85%;
    margin: 36px auto;
    padding: 16px 32px;
  }
  .readlist .readlist-content {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    gap: 10px;
  }
  .readbook-cover {
    grid-row: 1/-1;
  }
  @media screen and (max-width: 680px) {
    .readlist .readlist-content {
      grid-template-columns: 1fr;
      justify-items: center;
  }
  }
</style>
