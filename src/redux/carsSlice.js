import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, filterCars, resetCars } from './carsThunks';
import {
  handleCarsFulfilled,
  handleFilterFulfilled,
  handlePending,
  handleRejected,
  handleResetFulfilled,
} from './helpers';

const initialState = {
  entities: [],
  totalCount: '',
  isLoading: false,
  hideButton: false,
  error: null,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(filterCars.fulfilled, handleFilterFulfilled)
      .addCase(fetchCars.fulfilled, handleCarsFulfilled)
      .addCase(resetCars.fulfilled, handleResetFulfilled)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export default carsSlice.reducer;
