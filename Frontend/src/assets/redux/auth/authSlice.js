import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: user ? user : null,
  token: token ? token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  users: [],
};

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    throw error;
  }
});
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      // state.message = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.tokens[action.payload.tokens.length - 1];
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        // state.message = action.payload;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        // state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        // state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
