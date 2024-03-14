import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
// import { ListSlice } from "../features/ListSlice";
import mailSlice from '../store/mailSlice';

import userSlice from '../store/userSlice';

import { configureStore } from "@reduxjs/toolkit";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
        reducer:{
            mail: mailSlice,
            user:userSlice
          },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}