import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyAuthService from "./companyAuthService";

const companyUser = JSON.parse(localStorage.getItem("companyUser"));
const companyToken = JSON.parse(localStorage.getItem("companyToken"));

const initialState = {
  user: companyUser ? companyUser : null,
  token: companyToken ? companyToken : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  users: [],
};

export const registerCompany = createAsyncThunk(
  "companyAuth/register",
  async (user, thunkAPI) => {
    try {
      return await companyAuthService.registerCompany(user);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginCompany = createAsyncThunk(
  "companyAuth/login",
  async (user) => {
    try {
      return await companyAuthService.loginCompany(user);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutCompany = createAsyncThunk(
  "companyAuth/logout",
  async () => {
    try {
      return await companyAuthService.logoutCompany();
    } catch (error) {
      console.error(error);
    }
  }
);
export const updateCompanyImg = createAsyncThunk(
  "companyAuth/updateCompanyImg",
  async (formData) => {
    try {
      return await companyAuthService.updateCompanyImg(formData);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getAllbyId = createAsyncThunk("companyAuth/getAll", async (id) => {
  try {
    return await companyAuthService.getAllbyId(id);
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: "companyAuth",
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
      .addCase(loginCompany.fulfilled, (state, action) => {
        //18.04.2024 changed from action.payload to action.payload.user
        state.user = action.payload.user;
        state.token = action.payload.tokens[action.payload.tokens.length - 1];
        state.isSuccess = true;
      })
      .addCase(loginCompany.rejected, (state, action) => {
        state.isError = true;
        // state.message = action.payload;
      })

      .addCase(registerCompany.fulfilled, (state, action) => {
        state.isSuccess = true;
        // state.message = action.payload.message;
      })
      .addCase(registerCompany.rejected, (state, action) => {
        state.isError = true;
        // state.message = action.payload;
      })
      .addCase(logoutCompany.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
      })
      .addCase(updateCompanyImg.fulfilled, (state, action) => {
        state.user.profileImg = action.payload;
        console.log(action.payload);
      })
      .addCase(getAllbyId.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllbyId.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getAllbyId.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
