export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;
};

export const handleFilterFulfilled = (state, action) => {
  state.entities = action.payload.cars;
  state.totalCount = action.payload.totalCount;
  state.hideButton = true;
  state.isLoading = false;
};

export const handleCarsFulfilled = (state, action) => {
  state.isLoading = false;
  const newCars = action.payload.cars.filter(
    car => !state.entities.find(existingCar => existingCar.id === car.id)
  );
  state.entities.push(...newCars);
  state.totalCount = action.payload.totalCount;
  state.hideButton = false;
};

export const handleResetFulfilled = (state, action) => {
  state.isLoading = false;
  state.entities = action.payload.cars;
  state.totalCount = action.payload.totalCount;

  state.hideButton = false;
};
