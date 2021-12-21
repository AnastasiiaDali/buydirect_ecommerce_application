import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import accountReducer from '../features/account/accountSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    account: accountReducer
  }
});
