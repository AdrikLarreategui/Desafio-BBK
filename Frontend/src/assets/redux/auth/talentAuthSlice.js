import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import talentAuthService from "./talentAuthService";

const talentUser = JSON.parse(localStorage.getItem("talentUser"));
const talentToken = JSON.parse(localStorage.getItem("talentToken"));


const initialState = {
  user: talentUser ? talentUser : null,
  token: talentToken ? talentToken : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  users: [],
};

export const registerTalent = createAsyncThunk(
  "talentAuth/register",
  async (user) => {
    try {
      return await talentAuthService.registerTalent(user);
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginTalent = createAsyncThunk(
  "talentAuth/login",
  async (user) => {
    try {
      return await talentAuthService.loginTalent(user);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const logoutTalent = createAsyncThunk("talentAuth/logout", async () => {
  try {
    return await talentAuthService.logoutTalent();
  } catch (error) {
    console.error(error);
  }
});

export const updateTalentImg = createAsyncThunk(
  "talentAuth/updateTalentImg",
  async (formData) => {
    try {
      return await talentAuthService.updateTalentImg(formData);
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateTalentProfile = createAsyncThunk("talentAuth/updateProfileTalent", 
async(formData) =>{
  try{
    return await talentAuthService.updateTalent(formData)

  }
catch(error){
  console.error(error)
}
}
)

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
      .addCase(loginTalent.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.tokens[action.payload.tokens.length - 1];
        state.isSuccess = true;
      })
      .addCase(loginTalent.rejected, (state, action) => {
        state.isError = true;
        // state.message = action.payload;
      })

      .addCase(registerTalent.fulfilled, (state, action) => {
        state.isSuccess = true;
        // state.message = action.payload.message;
      })
      .addCase(registerTalent.rejected, (state, action) => {
        state.isError = true;
        // state.message = action.payload;
      })
      .addCase(logoutTalent.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
      })
      .addCase(updateTalentImg.fulfilled, (state, action) => {
        state.user.profileImg = action.payload;
        console.log(action.payload);
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
