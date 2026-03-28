import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./slice/UserInfoSlice";
import loadingSlice from "./slice/loadingSlice";
import authSlice from "./slice/authSlice";
const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    loading: loadingSlice,
    auth: authSlice,
  },
});

export default store;
