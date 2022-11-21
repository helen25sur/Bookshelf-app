<template>
<div>
  <v-toolbar app class="primary">
    <v-app-bar>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <router-link to="/" style="color: inherit">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="({ icon, route, title }, i) in buttons"
          :key="`menu-${i}`" :to="route" :prepend-icon="icon">
          {{ title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer class="hidden-md-and-up" temporary v-model="drawer">
      <v-list
        v-for="({ icon, route, title }, i) in buttons"
        :key="`drawernav-${i}`" :to="route">
        <v-list-item :prepend-icon="icon">
          {{ title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
</div>
</template>

<style scoped>

</style>

<script>

export default {
  data() {
    return {
      title: 'My Bookshelf',
      drawer: false,
      buttons: [
        { icon: 'mdi-bookshelf', title: 'Books', route: '/books' },
        { icon: 'mdi-list-box', title: 'Wishlist', route: '/wishlist' },
        { icon: 'mdi-book-variant', title: 'Read Books', route: '/read' },
        { icon: 'mdi-account-box', title: 'Profile', route: '/profile' },
        { icon: 'mdi-login-variant', title: 'Log In', route: '/login' },
        { icon: 'mdi-logout-variant', title: 'Log Out', route: '/logout' },
        { icon: 'mdi-login', title: 'Sign In', route: '/signin' },
      ],
    };
  },
};

</script>
