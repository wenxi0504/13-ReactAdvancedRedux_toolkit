import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
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
      } else {
        existingItem.quality++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;}

          removeItemFromCart(state, action){ 
              const id = action.payload;
              const existingItem = state.items.find(item => item.id === id);
              if (existingItem.quality === 1) {
                  state.items = state.items.filter(item => item.id !== id);
                  
              }
              else { 
                  existingItem.quality--;
                  existingItem.totalPrice=existingItem.totalPrice -newItem.price;
              }
          }
    },
    remobeItemFromCart() {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
