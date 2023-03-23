import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  onValue,
} from 'firebase/database';

import { getStorage, ref as refStorage, uploadBytes } from 'firebase/storage';

function writeUserData(userId, email) {
  const db = getDatabase();
  set(ref(db, `users/${userId}`), {
    profile: {
      email,
    },
    'wishlist-books': [],
    'readlist-books': [],
  });
}

function updateUserData(userId, data) {
  const db = getDatabase();
  const userProfileRef = ref(db, `users/${userId}/profile`);
  try {
    onValue(userProfileRef, (snapshot) => {
      const dataBD = snapshot.val();
      if (dataBD) {
        const updates = {};
        updates[`/users/${userId}/profile`] = data;
        update(ref(db), updates);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// eslint-disable-next-line consistent-return
async function getUserDate(userId) {
  const db = getDatabase();
  const userProfileRef = ref(db, `users/${userId}/profile`);
  try {
    const snapshot = await get(userProfileRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error(error);
  }
}

function uploadImage(userId, file) {
  const storage = getStorage();
  const storageRef = refStorage(storage, `avatars-${userId}`);

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a file!', snapshot);
  });
}

export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null,
    },
  },
  getters: {
    getIsUserAuthenticated: (state) => state.user.isAuthenticated,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.uid = payload;
    },
    UNSET_USER(state) {
      state.user = { isAuthenticated: false, uid: null };
    },
  },
  actions: {
    SIGNIN({ commit }, payload) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then(() => {
          commit('SET_PROCESSING', false);
          writeUserData(auth.currentUser.uid, payload.email);
        })
        .catch(({ message }) => {
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', message);
        });
    },
    LOGIN({ commit }, payload) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then(() => {
          commit('SET_PROCESSING', false);
        })
        .catch(({ message }) => {
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', message);
        });
    },
    LOGOUT() {
      const auth = getAuth();
      signOut(auth);
    },
    CHANGE_STAGE({ commit }, payload) {
      if (payload) {
        commit('SET_USER', payload.uid);
      } else {
        commit('UNSET_USER');
      }
    },
    GET_USER_PROFILE() {
      const auth = getAuth();
      const user = auth.currentUser;

      return getUserDate(user.uid);
      // const {
      //   displayName, email, photoURL,
      // } = user;
      // console.log(displayName, email, photoURL);
      // return { displayName, email, photoURL };
    },
    UPDATE_USER_PROFILE({ commit }, payload) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: payload.displayName,
        photoURL: payload.photoURL,
      }).then(() => {
        console.log('displayName & photoURL updated!', auth.currentUser);
      }).catch((error) => {
        console.log(error);
      });

      updateEmail(auth.currentUser, payload.email).then(() => {
        console.log('Email updated!', auth.currentUser);
      }).catch((error) => {
        console.log(error);
      });

      updateUserData(auth.currentUser.uid, payload);
      uploadImage(auth.currentUser.uid, payload.photoURL);
    },
  },
};
