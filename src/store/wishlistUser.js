import { getAuth } from 'firebase/auth';

import {
  getDatabase, ref, update, onValue, get, remove,
} from 'firebase/database';

function addNewBook(uid, bookData) {
  const db = getDatabase();
  const bookListRef = ref(db, `users/${uid}`);

  onValue(bookListRef, (snapshot) => {
    const data = snapshot.val();
    if (!Object.keys(data).includes('wishlist-books')) {
      const updates = {};
      updates[`/users/${uid}/wishlist-books/`] = { [bookData.bookID]: bookData };
      return update(ref(db), updates);
    }

    if (!Object.keys(data['wishlist-books']).includes(bookData.bookID)) {
      const updates = {};
      updates[`/users/${uid}/wishlist-books/${bookData.bookID}`] = bookData;
      return update(ref(db), updates);
    }

    return data;
  });
}

// eslint-disable-next-line consistent-return
async function getWishList(uid) {
  const db = getDatabase();
  const bookListRef = ref(db, `users/${uid}/wishlist-books`);
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
  const bookRef = ref(db, `users/${uid}/wishlist-books/${bookID}`);

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
      wishlist: [],
    },
  },
  getters: {
    getStateWishlist: (state) => state.user.wishlist,
  },
  mutations: {
    GET_WISHLIST(state) {
      const auth = getAuth();
      state.user.wishlist = getWishList(auth.currentUser.uid);
    },
  },
  actions: {
    ADD_BOOK_WISHLIST({ commit }, payload) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();

      addNewBook(auth.currentUser.uid, payload);
    },
    DELETE_BOOK({ commit }, bookID) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();

      deleteBook(auth.currentUser.uid, bookID);
    },
  },
};
