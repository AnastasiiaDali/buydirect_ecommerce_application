import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotaAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      state.cartTotalQuantity += action.payload.itemQuantity || 1;
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, itemQuantity: action.payload.itemQuantity || 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      state.cartTotalQuantity -= state.cartItems[itemIndex].itemQuantity;
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
      state.cartItems = nextCartItems;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
      state.cartTotalQuantity -= 1;

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
