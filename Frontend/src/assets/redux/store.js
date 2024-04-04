import { configureStore } from "@reduxjs/toolkit";
import talentAuth from "../redux/auth/talentAuthSlice";

export const store = configureStore({
  reducer: { talentAuth },
});
