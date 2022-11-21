import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then(({ user }) => {
          commit('SET_USER', user.uid);
          commit('SET_PROCESSING', false);
        })
        .catch(({ message }) => {
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', message);
        });
    },
    LOGIN({ commit }, payload) {
      commit('SET_PROCESSING', true);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then(({ user }) => {
          commit('SET_USER', user.uid);
          commit('SET_PROCESSING', false);
        })
        .catch(({ message }) => {
          commit('SET_PROCESSING', false);
          commit('SET_ERROR', message);
        });
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
