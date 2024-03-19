import { configureStore } from "@reduxjs/toolkit";
import auth from "../redux/auth/authSlice";

export const store = configureStore({
  reducer: { auth },
});
