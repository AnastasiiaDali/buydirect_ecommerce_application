import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart/cartSlice';
import accountReducer from './slices/account/accountSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    account: accountReducer
  }
});
