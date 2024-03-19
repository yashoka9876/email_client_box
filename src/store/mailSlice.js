// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendMessageIsOpen:false,
  toggle:false,
  unread:0
};

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen=!state.sendMessageIsOpen;
    },
    closeSendMessage: (state) => {
        state.sendMessageIsOpen=false;
    },
    toggleHandler: (state) => {
      state.toggle=!state.toggle;
  },
  unreadHandler:(state,actions)=>{
    state.unread=actions.payload;
    // localStorage.setItem('unread',state.unread);
  }
  },
});

export const { openSendMessage, closeSendMessage,toggleHandler,unreadHandler } = mailSlice.actions;

export default mailSlice.reducer;
