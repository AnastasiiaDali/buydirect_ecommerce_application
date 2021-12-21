import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
  user: {}
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
      console.log(state.user);
    }
  }
});

export const { addUser } = accountSlice.actions;
export default accountSlice.reducer;
