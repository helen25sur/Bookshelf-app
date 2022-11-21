import { createRouter, createWebHistory } from 'vue-router';

import BooksListVue from '@/components/BooksList.vue';
import WishListBooksVue from '@/components/WishListBooks.vue';
import ReadBooksVue from '@/components/ReadBooks.vue';
import UserProfileVue from '@/components/UserProfile.vue';
import LogInVue from '@/components/LogIn.vue';
import SignInVue from '@/components/SignIn.vue';

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
