<template>
<v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container>
      <v-card-title
        class="text-h5 font-weight-bold d-flex justify-center">
        User Log-In</v-card-title>
      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        name="email"
        variant="underlined"
        prepend-inner-icon="mdi-account-outline"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        name="password"
        placeholder="Enter your password"
        variant="underlined"
        prepend-inner-icon="mdi-lock-outline"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        hint="At least 7 characters"
      ></v-text-field>

      <v-alert
        v-if="error"
        color="warning"
        theme="dark"
        icon="mdi-message-alert"
        type="warning"
        border
      >
         {{error}}
      </v-alert>

    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success"
        @click.prevent="login"
        :disabled="processing">
        Login
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      show1: true,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 7 || 'Min 7 characters',
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('LOGIN', { email: this.email, password: this.password });
    },
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isUserAuthenticated() {
      return this.$store.getters.getIsUserAuthenticated;
    },
  },
  watch: {
    isUserAuthenticated(value) {
      if (value === true) {
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
