import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";

export const store = configureStore({
  reducer: { auth },
});