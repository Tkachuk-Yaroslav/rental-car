import axios from 'axios';

axios.defaults.baseURL = 'https://65b990b1b71048505a8af271.mockapi.io/';

export const getCars = async data => {
  try {
    const res = await axios.get('cars');

    const filteredCars = res.data;

    const startIndex = (data.page - 1) * data.pageSize;
    const endIndex = startIndex + data.pageSize;
    const carsForPage = filteredCars.slice(startIndex, endIndex);

    return {
      cars: carsForPage,
      totalCount: filteredCars.length,
    };
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const getFilterCars = async data => {
  try {
    const res = await axios.get('cars');

    let filteredCars = res.data.filter(car => {
      let includeCar = true;
      if (data.make && car.make !== data.make) {
        includeCar = false;
      }
      if (
        data.rentalPrice &&
        parseInt(car.rentalPrice.replace('$', ''), 10) >
          parseInt(data.rentalPrice, 10)
      ) {
        includeCar = false;
      }
      if (
        (data.mileageFrom &&
          data.mileageTo &&
          (car.mileage < parseInt(data.mileageFrom.replace(',', ''), 10) ||
            car.mileage > parseInt(data.mileageTo.replace(',', ''), 10))) ||
        (!data.mileageFrom &&
          data.mileageTo &&
          car.mileage > parseInt(data.mileageTo.replace(',', ''), 10)) ||
        (data.mileageFrom &&
          !data.mileageTo &&
          car.mileage < parseInt(data.mileageFrom.replace(',', ''), 10))
      ) {
        includeCar = false;
      }
      return includeCar;
    });

    return {
      cars: filteredCars,
      totalCount: filteredCars.length,
    };
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};
