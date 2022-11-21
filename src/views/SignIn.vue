<template>
<v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container>
      <v-card-title
        class="text-h5 font-weight-bold d-flex justify-center">
        User Registration</v-card-title>
      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        name="email"
        variant="underlined"
        prepend-inner-icon="mdi-account-outline"
      ></v-text-field>
        <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your account
        </span>

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

      <v-text-field
        color="primary"
        label="Password"
        placeholder="Confirm Password"
        variant="underlined"
        prepend-inner-icon="mdi-lock"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2"
        hint="At least 7 characters"
      ></v-text-field>
      <span class="text-caption text-grey-darken-1">
            Please enter a password for your account
      </span>

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

      <v-checkbox
        v-model="terms"
        color="primary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success"
        @click.prevent="signin"
        :disabled="processing">
        Complete Registration
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
      terms: false,
      show1: true,
      show2: true,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 7 || 'Min 7 characters',
      },
    };
  },
  methods: {
    signin() {
      this.$store.dispatch('SIGNIN', { email: this.email, password: this.password });
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
