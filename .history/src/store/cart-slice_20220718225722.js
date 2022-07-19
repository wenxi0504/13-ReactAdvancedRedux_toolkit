import { createSlice } from "@reduxjs/toolkit";
createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuality: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quality: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
    },
    remobeItemFromCart() {},
  },
});
