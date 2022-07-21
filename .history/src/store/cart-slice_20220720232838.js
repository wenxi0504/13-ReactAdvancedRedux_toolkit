import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuality: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuality++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quality: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quality++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuality--;
      if (existingItem.quality === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quality--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
