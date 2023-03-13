import { getAuth } from 'firebase/auth';

import {
  getDatabase, ref, update, onValue, get, remove,
} from 'firebase/database';

function addNewBook(uid, bookData) {
  const db = getDatabase();
  const bookListRef = ref(db, `users/${uid}`);

  onValue(bookListRef, (snapshot) => {
    const data = snapshot.val();
    if (!Object.keys(data).includes('readlist-books')) {
      const updates = {};
      updates[`/users/${uid}/readlist-books/`] = { [bookData.bookID]: bookData };
      return update(ref(db), updates);
    }

    if (!Object.keys(data['readlist-books']).includes(bookData.bookID)) {
      const updates = {};
      updates[`/users/${uid}/readlist-books/${bookData.bookID}`] = bookData;
      return update(ref(db), updates);
    }

    return data;
  });
}

// eslint-disable-next-line consistent-return
async function getReadList(uid) {
  const db = getDatabase();
  const bookListRef = ref(db, `users/${uid}/readlist-books`);
  try {
    const snapshot = await get(bookListRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    console.error(error);
  }
}

async function deleteBook(uid, bookID) {
  const db = getDatabase();
  const bookRef = ref(db, `users/${uid}/readlist-books/${bookID}`);

  try {
    remove(bookRef);
  } catch (error) {
    console.error(error);
  }
}

export default {
  state: {
    user: {
      isAuthenticated: false,
      readlist: [],
    },
  },
  getters: {
    getStateReadlist: (state) => state.user.readlist,
  },
  mutations: {
    GET_READLIST(state) {
      const auth = getAuth();
      state.user.readlist = getReadList(auth.currentUser.uid);
    },
  },
  actions: {
    ADD_BOOK_READLIST({ commit }, payload) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();

      addNewBook(auth.currentUser.uid, payload);
    },
    DELETE_READ_BOOK({ commit }, bookID) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();

      deleteBook(auth.currentUser.uid, bookID);
    },
  },
};
