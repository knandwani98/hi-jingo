import { StoreState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

interface SampleState {
  count: number;
}

const initialState: SampleState = {
  count: 0,
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increaseCount } = sampleSlice.actions;

export const sampleState = {
  count: (state: StoreState) => state.sample.count,
};

export const sampleActions = {
  increaseCount,
};

export default sampleSlice.reducer;
