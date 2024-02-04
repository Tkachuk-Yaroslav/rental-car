import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, filterCars, resetCars } from './carsThunks';

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
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(filterCars.fulfilled, (state, action) => {
        state.entities = action.payload.cars;
        state.totalCount = action.payload.totalCount;
        state.hideButton = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const newCars = action.payload.cars.filter(
          car => !state.entities.find(existingCar => existingCar.id === car.id)
        );
        state.entities.push(...newCars);
        state.totalCount = action.payload.totalCount;
        state.hideButton = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(resetCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload.cars;
        state.totalCount = action.payload.totalCount;

        state.hideButton = false;
      });
  },
});

export default carsSlice.reducer;
