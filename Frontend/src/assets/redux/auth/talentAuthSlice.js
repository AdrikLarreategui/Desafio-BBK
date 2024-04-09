import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import talentAuthService from "./talentAuthService";

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

export const register = createAsyncThunk(
  "talentAuth/register",
  async (user) => {
    try {
      return await talentAuthService.register(user);
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk("talentAuth/login", async (user) => {
  try {
    return await talentAuthService.login(user);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const logout = createAsyncThunk("talentAuth/logout", async () => {
  try {
    return await talentAuthService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: "talentAuth",
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