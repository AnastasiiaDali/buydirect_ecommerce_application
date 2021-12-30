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
      state.cartTotalQuantity += action.payload.itemQuantityTemp || 1;
      state.cartTotaAmount += (action.payload.itemQuantityTemp || 1) * action.payload.price;

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += action.payload.itemQuantityTemp || 1;
      } else {
        const tempProduct = {
          ...action.payload,
          itemQuantity: action.payload.itemQuantityTemp || 1
        };
        delete tempProduct.itemQuantityTemp;
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      state.cartTotaAmount = state.cartTotaAmount - state.cartItems[itemIndex].price;
      state.cartTotalQuantity -= state.cartItems[itemIndex].itemQuantity;
      const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
      state.cartItems = nextCartItems;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
      state.cartTotalQuantity -= 1;

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
        state.cartTotaAmount = state.cartTotaAmount - state.cartItems[itemIndex].price;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        state.cartTotaAmount = state.cartTotaAmount - state.cartItems[itemIndex].price;
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
