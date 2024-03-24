import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface UserState {
  userState: {
    state: string;
    name?: string;
    userName?: string;
    avt?: string;
  };
}

const initialState: UserState = {
  userState: {
    state: "unactive",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setState: (state: UserState, action) => {
      state.userState = action.payload;
    },
    logoutUser: (state: UserState) => {
      state.userState = {
        state: "unactive",
      };
    },
  },
});

export const { setState, logoutUser } = userSlice.actions;

export default userSlice.reducer;
