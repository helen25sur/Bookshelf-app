<template>
<div>
    <v-app-bar prominent class="primary">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <router-link to="/Bookshelf-app/" class="mx-4" style="color: inherit">
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="({ icon, route, title }, i) in buttons"
          :key="`menu-${i}`" :to="route" :prepend-icon="icon">
          {{ title }}</v-btn>
        <v-btn
          v-if="isUserAuthenticated"
          @click="dialog = true"
          prepend-icon="mdi-logout-variant">
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer class="hidden-md-and-up" temporary v-model="drawer">
      <v-list>
        <v-list-item
          v-for="({ icon, route, title }, i) in buttons"
          :key="`drawernav-${i}`"
          :prepend-icon="icon" :to="route">
          {{ title }}
        </v-list-item>
        <v-list-item
          v-if="isUserAuthenticated"
          @click="dialog = true"
          title="Log Out" value="logout"
          prepend-icon="mdi-logout-variant">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        <v-card-title class="text-h5">
          Would you like to logout?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="logout"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialog: false,
      isLogout: false,
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.getIsUserAuthenticated;
    },
    buttons() {
      return this.isUserAuthenticated ? [
        { icon: 'mdi-bookshelf', title: 'Books', route: '/Bookshelf-app/books' },
        { icon: 'mdi-list-box', title: 'Wishlist', route: '/Bookshelf-app/wishlist' },
        { icon: 'mdi-book-variant', title: 'Read Books', route: '/Bookshelf-app/read' },
        { icon: 'mdi-account-box', title: 'Profile', route: '/Bookshelf-app/profile' },
      ] : [
        { icon: 'mdi-bookshelf', title: 'Books', route: '/Bookshelf-app/books' },
        { icon: 'mdi-login-variant', title: 'Log In', route: '/Bookshelf-app/login' },
        { icon: 'mdi-login', title: 'Sign In', route: '/Bookshelf-app/signin' },
      ];
    },
  },
  methods: {
    logout() {
      this.dialog = false;
      this.$store.dispatch('LOGOUT');
      this.$router.push({ path: '/' });
    },
  },
};

</script>
