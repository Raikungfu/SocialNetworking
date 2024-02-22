import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  userState: {
    state: String,
    name?: String,
    userName?: String,
    avt?: String,
  }
}

const initialState: UserState = {
  userState: {
    state: 'unactive'
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setState: (state: UserState, action) => {
      state.userState = action.payload;
    },
    logoutUser: (state: UserState) => {
      state.userState = {
        state: 'unactive'
      }
    },
  },
});

export const { setState, logoutUser } = userSlice.actions;

export default userSlice.reducer;
