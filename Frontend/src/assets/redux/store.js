import { configureStore } from "@reduxjs/toolkit";
import talentAuth from "../redux/auth/talentAuthSlice";
import companyAuth from "../redux/auth/companyAuthSlice";
import talents from "../redux/talents/talentsSlice";
import offers from "../redux/auth/offerAuthSlice";

export const store = configureStore({
  reducer: { talentAuth, companyAuth, talents, offers },
});
