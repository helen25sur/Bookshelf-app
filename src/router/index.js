import { createRouter, createWebHistory } from 'vue-router';

import Store from '@/store';

import BooksListVue from '@/views/BooksList.vue';
import BookDetailVue from '@/views/BookDetail.vue';
import WishListBooksVue from '@/views/WishListBooks.vue';
import ReadBooksVue from '@/views/ReadBooks.vue';
import UserProfileVue from '@/views/UserProfile.vue';
import LogInVue from '@/views/LogIn.vue';
import SignInVue from '@/views/SignIn.vue';

import HomeView from '../views/Home.vue';

function AuthGuard(from, to, next) {
  if (Store.getters.getIsUserAuthenticated) {
    next();
  } else {
    next('/signin');
  }
}

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
    path: '/books/:id',
    name: 'book',
    props: true,
    component: BookDetailVue,
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishListBooksVue,
    beforeEnter: AuthGuard,
  },
  {
    path: '/read',
    name: 'read',
    component: ReadBooksVue,
    beforeEnter: AuthGuard,
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfileVue,
    beforeEnter: AuthGuard,
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
