import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import talentService from "./talentsService";

// const user = JSON.parse(localStorage.getItem("user"));
// const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  //   user: user ? user : null,
  //   token: token ? token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  talents: [],
};

export const getAllTalents = createAsyncThunk(
  "talents/getAllTalents",
  async () => {
    try {
      return await talentService.getAllTalents();
    } catch (error) {
      console.error(error);
    }
  }
);

export const talentsSlice = createSlice({
  name: "talents",
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
      .addCase(getAllTalents.fulfilled, (state, action) => {
        state.talents = action.payload;
      })
      .addCase(getAllTalents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTalents.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { reset } = talentsSlice.actions;

export default talentsSlice.reducer;
