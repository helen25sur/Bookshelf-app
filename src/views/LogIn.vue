<template>
<v-card
    class="mx-auto"
    max-width="500"
  >
   <v-form
    v-model="valid"
    @submit.prevent="login">
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
        :rules="[rules.required, rules.emailRule]"
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
        @click="login"
        :disabled="processing || !valid"
        type="submit">
        Login
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      show1: true,
      valid: false,
      rules: {
        required: (value) => !!value || 'Required field',
        min: (v) => v.length >= 7 || 'Minimum 7 characters',
        emailRule: (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Incorrect email',
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
