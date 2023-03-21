<!-- eslint-disable max-len -->
<template>
  <v-container>
    <h1>User Profile</h1>
    <v-card
      theme="dark" class="mx-auto" max-width="70%" variant="outlined">
      <div class="d-flex flex-no-wrap justify-start pa-6">
        <v-avatar class="ma-3" size="225" rounded="0">
          <v-img src="./img/Female_avatar.png">
          </v-img>
        </v-avatar>
        <div class="pl-4">
          <v-card-title class="text-h4 text-purple-darken-1 mb-2">
            UserName
          </v-card-title>
          <v-card-subtitle class="text-h5 mb-2">About User</v-card-subtitle>
          <v-card-text>
          <p class="text--primary text-body-1 mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore iste in corrupti qui, sunt blanditiis mollitia minima sed. Quam dolore est enim quis cupiditate, molestias sunt voluptatem explicabo ipsam provident?</p>
          <p class="text--primary text-body-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore iste in corrupti qui, sunt blanditiis mollitia minima sed. Quam dolore est enim quis cupiditate, molestias sunt voluptatem explicabo ipsam provident?</p>

          </v-card-text>
          <!-- <v-card-actions>
            <v-btn class="ms-2" variant="outlined" size="small">

            </v-btn>
          </v-card-actions> -->
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
// import AvatarImg from '@/assets/Female_avatar.png';

export default {
  components: {
    // AvatarImg,
  },
};
</script>
