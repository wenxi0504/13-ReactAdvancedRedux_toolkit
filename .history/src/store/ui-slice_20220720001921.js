import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  // map of all methods and actions
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
  showNotification(state, action) {
    state.notification = { status: action.payload.status };
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
