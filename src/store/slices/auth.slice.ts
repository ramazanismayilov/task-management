import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  userId: number | null
  accessToken: string | null
  refreshToken: string | null
}

const initialState: AuthState = {
  userId: Number(localStorage.getItem("userId")),
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userId, accessToken, refreshToken } = action.payload.data;

      localStorage.setItem("userId", String(userId));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      state.userId = userId;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

    },
    setRegisteredUser: (state, action) => {
      const { userId } = action.payload.data;
      localStorage.setItem("userId", String(userId));
      state.userId = userId;
    },
    setVerifyOtp: (state, action) => {
      const { userId } = action.payload.data;
      localStorage.setItem("userId", String(userId));
      state.userId = userId;
    },
    logoutUser: (state) => {
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      state.userId = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setCredentials, logoutUser } = authSlice.actions;
export default authSlice.reducer;
