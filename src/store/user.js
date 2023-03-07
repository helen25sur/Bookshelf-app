import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref, set } from 'firebase/database';

function writeUserData(userId, email) {
  const db = getDatabase();
  set(ref(db, `users/${userId}`), {
    profile: {
      email,
    },
    'wishlist-books': [
      { bookID: '' },
    ],
    'readlist-books': [
      { bookID: '' },
    ],
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
  },
};
