<!-- eslint-disable max-len -->
<template>
  <v-container>
    <h1>User Profile</h1>
    <v-card theme="dark" class="mx-auto" max-width="70%" variant="outlined">
      <div class="d-flex flex-no-wrap justify-start pa-6">
        <v-avatar image="./img/Female_avatar.png" class="ma-3" size="225" rounded="0">
        </v-avatar>
        <div class="pl-4">
          <v-card-title class="text-h4 text-purple-darken-1 mb-2">
            UserName
          </v-card-title>
          <v-card-subtitle class="text-h5 mb-2">About User</v-card-subtitle>
          <v-card-text>
            <p class="text--primary text-body-1 mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              iste in corrupti qui, sunt blanditiis mollitia minima sed. Quam dolore est enim quis cupiditate, molestias
              sunt voluptatem explicabo ipsam provident?</p>
            <p class="text--primary text-body-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore iste in
              corrupti qui, sunt blanditiis mollitia minima sed. Quam dolore est enim quis cupiditate, molestias sunt
              voluptatem explicabo ipsam provident?</p>

          </v-card-text>
          <v-card-actions>
            <v-btn class="ms-2" variant="outlined" color="primary">
              Edit Profile
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <v-card variant="outlined" class="mx-auto mt-10 pa-5" max-width="70%">
      <form>
        <v-text-field v-model="name" prepend-icon="mdi-account-edit" label="Name"></v-text-field>

        <v-text-field v-model="email" prepend-icon="mdi-email" label="E-mail"></v-text-field>

        <v-file-input label="Avatar image" variant="filled" prepend-icon="mdi-camera"></v-file-input>

        <v-textarea prepend-icon="mdi-pen" label="Tell about yourself"></v-textarea>
        <v-card-actions class="d-flex justify-center">
          <v-btn class="me-4" color="primary" variant="outlined" type="submit">
          submit
          </v-btn>

          <v-btn color="warning" variant="outlined">
            clear
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      email: '',
      aboutUserDescr: '',
      rules: {
        required: (value) => !!value || 'Required field',
        emailRule: (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Incorrect email',
        min: (v) => v.length >= 20 || 'Minimum 20 characters',
      },
    };
  },
};
</script>
