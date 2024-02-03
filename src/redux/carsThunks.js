import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '../api/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (data, thunkAPI) => {
    try {
      const response = await getAllCars(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
