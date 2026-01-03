<!-- eslint-disable max-len -->
<template>
  <v-container>
    <h1>User Profile</h1>
    <v-card theme="dark" class="user-card mx-auto" variant="outlined">
      <div v-if="!isLoading" class="user-card-content d-flex flex-no-wrap justify-start pa-6">
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
    <v-card v-if="isEditForm" variant="outlined" class="user-edit-form mx-auto mt-10 pa-5">
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
import { auth } from '@/config/firebase';

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
      selectedFile: null,
    };
  },
  methods: {
    saveUserChanges() {
      this.isEditForm = false;
      this.$store.dispatch('UPDATE_USER_PROFILE', {
        displayName: this.displayName,
        email: this.email,
        photoURL: this.photoURL, // для прев'ю
        file: this.selectedFile, // <--- ВАЖЛИВО: передайте об'єкт File
        aboutUser: this.aboutUserDescr,
      });
    },
    async getUserDate() {
      try {
        // const auth = getAuth();
        // 1. Спочатку беремо дані прямо з акаунта (вони там точно є після входу)
        const { currentUser } = auth;
        if (currentUser) {
          this.email = currentUser.email;
          this.displayName = currentUser.displayName || 'UserName';
        }

        // 2. Потім пробуємо завантажити додаткові дані з бази (About User, Photo тощо)
        const userData = await this.$store.dispatch('GET_USER_PROFILE');

        if (userData) {
          // Якщо в базі є дані, вони пріоритетні
          this.displayName = userData.displayName || this.displayName;
          this.photoURL = userData.photoURL || './img/Female_avatar.png';
          this.aboutUserDescr = userData.aboutUser || 'Write about yourself';
        }
      } catch (error) {
        console.error('Profile load error:', error);
      } finally {
        this.isLoading = false;
      }
    },
    onImagePicker(e) {
      const file = e.target.files[0];
      this.selectedFile = file;

      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener('load', () => {
        const imageUrl = fr.result;
        // eslint-disable-next-line prefer-destructuring
        this.photoURL = imageUrl;
      });
    },
  },
};
</script>

<style scoped>
.user-card,
.user-edit-form {
  max-width: 70%;
}

@media screen and (max-width: 960px) {
  .user-card,
  .user-edit-form {
    max-width: 95%;
  }
}

@media screen and (max-width: 780px) {
  .user-card-content {
    flex-direction: column;
    align-items: center;
  }
}
</style>
