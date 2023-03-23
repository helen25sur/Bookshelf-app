<!-- eslint-disable max-len -->
<template>
  <v-container>
    <h1>User Profile</h1>
    <v-card theme="dark" class="mx-auto" max-width="70%" variant="outlined">
      <div v-if="!isLoading" class="d-flex flex-no-wrap justify-start pa-6">
        <v-avatar class="ma-3" size="225" rounded="0">
        <img :src="photoURL" :alt="displayName" width="225">
        </v-avatar>
        <div class="pl-4">
          <v-card-title class="text-h4 text-purple-darken-1 mb-2">
            {{ displayName }}
          </v-card-title>
          <v-card-subtitle class="text-h5 mb-2">About User</v-card-subtitle>
          <v-card-text>
            <a :href="'mailto:' + email" class="text--primary text-body-1">{{ email }}</a>
            <p class="text--primary text-body-1 mt-3 mb-2">
              {{ aboutUserDescr }}
            </p>

          </v-card-text>
          <v-card-actions>
            <v-btn @click="isEditForm = true" class="ms-2" variant="outlined" color="primary">
              Edit Profile
            </v-btn>
          </v-card-actions>
        </div>
      </div>
      <LoaderComponent v-else-if="isLoading" class="d-flex my-6 mx-auto" size="65" width="6"></LoaderComponent>
    </v-card>
    <v-card v-if="isEditForm" variant="outlined" class="mx-auto mt-10 pa-5" max-width="70%">
      <form @submit.prevent="saveUserChanges">
        <v-text-field v-model="displayName" prepend-icon="mdi-account-edit" label="Name" :value="displayName"></v-text-field>

        <v-text-field v-model="email" prepend-icon="mdi-email" label="E-mail" :value="email"></v-text-field>

        <v-file-input label="Avatar image" variant="filled" prepend-icon="mdi-camera" :filename="photoURL" @change="onImagePicker" accept="image/*"></v-file-input>

        <v-textarea v-model="aboutUserDescr" prepend-icon="mdi-pen" label="Tell about yourself"
          :value="aboutUserDescr"></v-textarea>
        <v-card-actions class="d-flex justify-center">
          <v-btn class="me-4" color="primary" variant="outlined" type="submit">
            submit
          </v-btn>

          <v-btn @click="isEditForm = false" color="warning" variant="outlined">
            cancel
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import LoaderComponent from '@/components/LoaderComponent.vue';

export default {
  components: {
    LoaderComponent,
  },
  mounted() {
    this.getUserDate();
  },
  data() {
    return {
      displayName: 'UserName',
      email: 'username@user.com',
      photoURL: './img/Female_avatar.png',
      aboutUserDescr: 'Write about yourself',
      isEditForm: false,
      rules: {
        required: (value) => !!value || 'Required field',
        emailRule: (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Incorrect email',
        min: (v) => v.length >= 20 || 'Minimum 20 characters',
      },
      isLoading: true,
    };
  },
  methods: {
    saveUserChanges() {
      this.isEditForm = false;
      this.$store.dispatch('UPDATE_USER_PROFILE', {
        displayName: this.displayName,
        email: this.email,
        photoURL: this.photoURL,
        aboutUser: this.aboutUserDescr,
      });
    },
    async getUserDate() {
      const {
        displayName,
        email,
        photoURL,
        aboutUser,
      } = await this.$store.dispatch('GET_USER_PROFILE');
      this.displayName = displayName !== null ? displayName : 'UserName';
      this.email = email !== null ? email : 'username@user.com';
      this.photoURL = photoURL !== null ? photoURL : './img/Female_avatar.png';
      this.aboutUserDescr = aboutUser !== null ? aboutUser : 'Write about yourself';
      this.isLoading = false;
    },
    onImagePicker(e) {
      const { files } = e.target;

      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.addEventListener('load', () => {
        const imageUrl = fr.result;
        // eslint-disable-next-line prefer-destructuring
        this.photoURL = imageUrl;
      });
    },
  },
};
</script>
