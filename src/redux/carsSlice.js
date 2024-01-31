import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsThunks';

const initialState = {
  entities: [
    // {
    //   id: 0,
    //   year: 2024,
    //   make: '',
    //   model: '',
    //   type: '',
    //   img: '',
    //   description: '',
    //   fuelConsumption: '',
    //   engineSize: '',
    //   accessories: [],
    //   functionalities: [],
    //   rentalPrice: '',
    //   rentalCompany: '',
    //   address: '',
    //   rentalConditions: '',
    //   mileage: 0,
    // },
  ],
  isLoading: false,
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
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.entities.push(action.payload);
        state.entities = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
  // {
  //   [fetchCars.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [fetchCars.fulfilled]: (state, action) => {
  //     state.entities.push(action.payload);
  //     state.isLoading = false;
  //   },
  //   [fetchCars.rejected]: (state, action) => {
  //     state.isLoading = false;
  //   },
  // },
});

// export const { fetchCars } = carsSlice.actions;

export default carsSlice.reducer;
