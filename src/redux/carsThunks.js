import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '../api/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const response = await getAllCars();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
