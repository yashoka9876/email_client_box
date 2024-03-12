// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendMessageIsOpen:false
};

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen=true;
    },
    closeSendMessage: (state) => {
        state.sendMessageIsOpen=false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export default mailSlice.reducer;
