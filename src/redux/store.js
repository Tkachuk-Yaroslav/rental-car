import { configureStore } from '@reduxjs/toolkit';
import { carsSlice } from './carsSlice';

export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
  },
});
