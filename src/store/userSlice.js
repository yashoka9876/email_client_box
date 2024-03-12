// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state,actions) => {
      window.alert('signIn brother')
      state.value=actions.payload;
    },
    signUp: (state) => {
      window.alert('signout brother')
        state.value=null;
    },
  },
});

export const { signIn,signUp } = userSlice.actions;

export default userSlice.reducer;
