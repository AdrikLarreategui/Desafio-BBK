import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import offerService from "./offerAuthService";

const initialState = {
  offers: [],
  createdOffers: [],
  isLoading: false,
  //PENDIENTE
  offer: {},
};

export const getAll = createAsyncThunk("offers/getAll", async () => {
  try {
    return await offerService.getAll();
  } catch (error) {
    res.send(error);
  }
});

export const getAllFilter = createAsyncThunk(
  "offers/getAllFilter",
  async (filterData) => {
    try {
      return await offerService.getAllFilter(filterData);
    } catch (error) {
      res.send(error);
    }
  }
);

export const getById = createAsyncThunk("offer/getById", async (id) => {
  try {
    const filterData = { _id: id };
    return await offerService.getAllFilter(filterData);
  } catch (error) {
    res.send(error);
  }
});

export const createOffer = createAsyncThunk(
  "offer/create",
  async (offerData) => {
    try {
      return await offerService.createOffer(offerData);
    } catch (error) {
      res.send(error);
    }
  }
);

export const deleteOffer = createAsyncThunk("offer/delete", async (id) => {
  try {
    return await offerService.deleteOffer(id);
  } catch (error) {
    res.send(error);
  }
});

export const likeOffer = createAsyncThunk("offer/like", async () => {
  try {
    return await offerService.likeOffer();
  } catch (error) {
    res.send(error);
  }
});

export const unlikeOffer = createAsyncThunk("offer/unlike", async () => {
  try {
    return await offerService.unlikeOffer();
  } catch (error) {
    res.send(error);
  }
});

export const offerSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(getAll.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.offer = action.payload[0];
        state.isLoading = false;
      })
      .addCase(getById.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(createOffer.fulfilled, (state, action) => {
        state.offers.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOffer.fulfilled, (state, action) => {
        state.offer = action.payload.offer;
        state.token = action.payload.token;
        state.isLoading = false;
      })
      .addCase(deleteOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFilter.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllFilter.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { reset } = offerSlice.actions;
export default offerSlice.reducer;
