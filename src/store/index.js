import { createStore } from 'vuex';

import userModule from './user';
import generalModule from './general';
import wishlistModule from './wishlistUser';

export default createStore({
  modules: {
    userModule,
    generalModule,
    wishlistModule,
  },
});
