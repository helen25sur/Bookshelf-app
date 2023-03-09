import { createStore } from 'vuex';

import userModule from './user';
import generalModule from './general';
import wishlistModule from './wishlistUser';
import readlistModule from './readlistUser';

export default createStore({
  modules: {
    userModule,
    generalModule,
    wishlistModule,
    readlistModule,
  },
});
