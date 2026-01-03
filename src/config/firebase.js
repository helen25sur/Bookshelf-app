// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY_GB,
  authDomain: 'bookselfapp-6ef1c.firebaseapp.com',
  projectId: 'bookselfapp-6ef1c',
  storageBucket: 'bookselfapp-6ef1c.appspot.com',
  messagingSenderId: '817918338256',
  appId: '1:817918338256:web:ba832ae1cae3a8876aaad5',
  measurementId: 'G-WHYX5ZJV71',
  databaseURL: 'https://bookselfapp-6ef1c-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Ініціалізуємо додаток
const app = initializeApp(firebaseConfig);

// Експортуємо конкретні сервіси
export const auth = getAuth(app);
export const db = getDatabase(app);

export default firebaseConfig;
