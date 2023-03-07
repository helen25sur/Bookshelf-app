import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Vuetify
// eslint-disable-next-line import/extensions
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import firebaseConfig from './config/firebase';

import App from './App.vue';
import router from './router';
import store from './store';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});

export default vuetify;

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);
// Initialize Realtime Database and get a reference to the service
// eslint-disable-next-line no-unused-vars
const realTimeDB = getDatabase(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  store.dispatch('CHANGE_STAGE', user);
});

createApp(App).use(vuetify).use(store).use(router)
  .mount('#app');
