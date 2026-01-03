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
} from 'firebase/database';

import {
  getStorage, ref as refStorage, uploadBytes, getDownloadURL,
} from 'firebase/storage';

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

// function updateUserData(userId, data) {
//   const db = getDatabase();
//   const userProfileRef = ref(db, `users/${userId}/profile`);
//   try {
//     onValue(userProfileRef, (snapshot) => {
//       const dataBD = snapshot.val();
//       if (dataBD) {
//         const updates = {};
//         updates[`/users/${userId}/profile`] = data;
//         update(ref(db), updates);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
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

async function uploadImage(userId, file) {
  const storage = getStorage();
  const storageRef = refStorage(storage, `avatars/${userId}`); // краще створити папку avatars/

  try {
    // 1. Завантажуємо файл
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Uploaded a file!', snapshot);

    // 2. Отримуємо публічне посилання
    const downloadURL = await getDownloadURL(snapshot.ref);

    // 3. ПОВЕРТАЄМО це посилання
    return downloadURL;
  } catch (error) {
    console.error('Помилка завантаження фото:', error);
    throw error;
  }
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
    async UPDATE_USER_PROFILE({ commit }, payload) {
      commit('SET_PROCESSING', true);
      commit('CLEAR_ERROR');
      const auth = getAuth();
      const user = auth.currentUser;

      try {
        let finalPhotoURL = payload.photoURL;

        // 1. Спочатку завантажуємо фото в Storage (якщо це новий файл/Base64)
        // payload.file — це той об'єкт, який ми маємо передати з компонента
        if (payload.file) {
          finalPhotoURL = await uploadImage(user.uid, payload.file);
        }

        // 2. Оновлюємо Auth Profile (тепер з коротким URL)
        await updateProfile(user, {
          displayName: payload.displayName,
          photoURL: finalPhotoURL,
        });
        console.log('Auth profile updated!');

        // 3. Оновлюємо Email, якщо він змінився
        if (payload.email !== user.email) {
          await updateEmail(user, payload.email);
          console.log('Email updated!');
        }

        // 4. Оновлюємо базу даних (використовуємо await, щоб бути впевненими в записі)
        // Створюємо чистий об'єкт для бази без об'єкта File
        const dataToSave = {
          displayName: payload.displayName,
          email: payload.email,
          photoURL: finalPhotoURL,
          aboutUser: payload.aboutUser, // переконайтеся, що це поле є в payload
        };

        const db = getDatabase();
        await update(ref(db, `users/${user.uid}/profile`), dataToSave);
        console.log('Database updated!');

        commit('SET_PROCESSING', false);
      } catch (error) {
        commit('SET_PROCESSING', false);
        commit('SET_ERROR', error.message);
        console.error('Update Profile Error:', error);
      }
    },
  },
};
