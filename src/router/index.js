import { createRouter, createWebHistory } from 'vue-router';

import BooksListVue from '@/views/BooksList.vue';
import WishListBooksVue from '@/views/WishListBooks.vue';
import ReadBooksVue from '@/views/ReadBooks.vue';
import UserProfileVue from '@/views/UserProfile.vue';
import LogInVue from '@/views/LogIn.vue';
import SignInVue from '@/views/SignIn.vue';

import HomeView from '../views/home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/books',
    name: 'books',
    component: BooksListVue,
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishListBooksVue,
  },
  {
    path: '/read',
    name: 'read',
    component: ReadBooksVue,
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfileVue,
  },
  {
    path: '/login',
    name: 'login',
    component: LogInVue,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
