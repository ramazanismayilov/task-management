import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userId: number | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  userId: null,
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const data = action.payload.data;

      state.userId = data.userId;
      state.accessToken = data.accessToken;
      state.refreshToken = data.refreshToken;
    },

    logout: (state) => {
      state.userId = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
