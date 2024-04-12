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

export const loginTalent = createAsyncThunk("talentAuth/login", async (user) => {
  try {
    return await talentAuthService.loginTalent(user);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const logoutTalent = createAsyncThunk("talentAuth/logout", async () => {
  try {
    return await talentAuthService.logoutTalent();
  } catch (error) {
    console.error(error);
  }
});

//////////////////////////////////////////////

// export const getAll = createAsyncThunk("talents/getAll", async () => {
//   try {
//     return await talentsService.getAll();
//   } catch (error) {
//     console.error(error);
//   }
// });

// export const getById = createAsyncThunk("talents/getById", async (_id) => {
//   try {
//     return await talentsService.getById(_id);
//   } catch (error) {
//     console.error(error);
//   }
// });
// export const getTalentByTitle = createAsyncThunk(
//   "talents/getTalentByTitle",
//   async (title) => {
//     try {
//       return await talentsService.getTalentByTitle(title);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );


//////////////////////////

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
      });
      /////////////
      // .addCase(getAll.fulfilled, (state, action) => {
      //   state.talents = action.payload;
      // })
      // .addCase(getAll.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getById.fulfilled, (state, action) => {
      //   state.talent = action.payload;
      // })
      // .addCase(getTalentByTitle.fulfilled, (state, action) => {
      //   state.talents = action.payload;
      // })

      //   state.isLoading = false;

      ////////////
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
