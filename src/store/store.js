import { configureStore } from '@reduxjs/toolkit';
import mailReducer from './mailSlice';

import userSlice from './userSlice';

const store = configureStore({
  reducer:{
    mail: mailReducer,
    user:userSlice
  }
  // Additional middleware and store enhancers if any
});

export default store;