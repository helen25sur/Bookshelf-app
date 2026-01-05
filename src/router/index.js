/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';

import Store from '../store';

import BooksListVue from '../views/BooksList.vue';
import BookDetailVue from '../views/BookDetail.vue';
import WishListBooksVue from '../views/WishListBooks.vue';
import ReadBooksVue from '../views/ReadBooks.vue';
import UserProfileVue from '../views/UserProfile.vue';
import LogInVue from '../views/LogIn.vue';
import SignInVue from '../views/SignIn.vue';

import HomeView from '../views/Home.vue';

function AuthGuard(from, to, next) {
  if (Store.getters.getIsUserAuthenticated) {
    next();
  } else {
    next('/Bookshelf-app/signin');
  }
}

const routes = [
  {
    path: '/Bookshelf-app/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Bookshelf-app/books',
    name: 'books',
    component: BooksListVue,
  },
  {
    path: '/Bookshelf-app/books/:id',
    name: 'book',
    props: true,
    component: BookDetailVue,
  },
  {
    path: '/Bookshelf-app/wishlist',
    name: 'wishlist',
    component: WishListBooksVue,
    beforeEnter: AuthGuard,
  },
  {
    path: '/Bookshelf-app/read',
    name: 'read',
    component: ReadBooksVue,
    beforeEnter: AuthGuard,
  },
  {
    path: '/Bookshelf-app/profile',
    name: 'profile',
    component: UserProfileVue,
    beforeEnter: AuthGuard,
  },
  {
    path: '/Bookshelf-app/login',
    name: 'login',
    component: LogInVue,
  },
  {
    path: '/Bookshelf-app/signin',
    name: 'signin',
    component: SignInVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
