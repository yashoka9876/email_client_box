// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value:{email:'yashoka@gmail.com'}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state,actions) => {
      
      state.value=actions.payload;
    },
    signUp: (state) => {
        state.value=null;
        localStorage.removeItem('auth');
    },
  },
});

export const { signIn,signUp } = userSlice.actions;

export default userSlice.reducer;
