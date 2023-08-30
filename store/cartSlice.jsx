import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      state.totalQuantity++;
      // console.log(newItem);

      const ItemExistInCart = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.selectedSize
      );

      if (!ItemExistInCart) {
        state.items.push({
          id: newItem.id,
          size: newItem.selectedSize,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        ItemExistInCart.quantity += 1;
        ItemExistInCart.totalPrice = ItemExistInCart.totalPrice + newItem.price;
      }

      state.totalAmount += newItem.price;
    },

    removeItemFromCart(state, action) {
      const { id, size } = action.payload;

      // console.log(id, size);

      const ItemInCart = state.items.find(
        (item) => item.id === id && item.size === size
      );

      console.log(ItemInCart);

      state.totalQuantity--;

      if (ItemInCart.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== id || item.size !== size
        );
        state.totalAmount -= ItemInCart.totalPrice;
      } else {
        ItemInCart.quantity--;
        ItemInCart.totalPrice -= ItemInCart.price;
        state.totalAmount -= ItemInCart.price;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
