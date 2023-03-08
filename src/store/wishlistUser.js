import { getAuth } from 'firebase/auth';
// child, push, get, child,

import {
  getDatabase, ref, update, onValue, get,
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
      console.log(snapshot.val());
      return snapshot.val();
    }
    return null;
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
  actions: {
    ADD_BOOK_WISHLIST({ commit }, payload) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();

      addNewBook(auth.currentUser.uid, payload);
    },
    GET_BOOKS_WISHLIST({ commit }) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();
      return getWishList(auth.currentUser.uid);
    },
  },
};
