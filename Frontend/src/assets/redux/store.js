import { configureStore } from "@reduxjs/toolkit";
import talentAuth from "../redux/auth/talentAuthSlice";
import companyAuth from "../redux/auth/companyAuthSlice"

export const store = configureStore({
  reducer: { talentAuth, companyAuth }
});
