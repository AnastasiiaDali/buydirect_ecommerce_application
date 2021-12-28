import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
  user: {},
  isLoggedIn: false
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
      const nextState = produce(state.user, (draftState) => {
        delete draftState.confirmPassword;
      });
      state.user = nextState;
    },
    userLogIn(state) {
      state.isLoggedIn = true;
    }
  }
});

export const { addUser, userLogIn } = accountSlice.actions;
export default accountSlice.reducer;
