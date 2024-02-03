import axios from 'axios';

axios.defaults.baseURL = 'https://65b990b1b71048505a8af271.mockapi.io/';

export const getAllCars = async data => {
  try {
    const res = await axios.get('cars');

    // Якщо дані для фільтрації не передано, повертаємо всі записи без фільтрації
    // if (!data.make) {
    if (!data.make && data.rentalPrice && data.mileageFrom && data.mileageTo) {
      console.log(res.data);
      return res.data;
    }

    let filteredCars = res.data;

    // Фільтрація за маркою авто
    if (data.make) {
      filteredCars = filteredCars.filter(car => car.make === data.make);
    }

    // Фільтрація за вартістю оренди
    if (data.rentalPrice) {
      const numericRentalPrice = parseInt(data.rentalPrice, 10); // Конвертуємо у числовий тип даних
      filteredCars = filteredCars.filter(car => {
        // Отримуємо числове значення вартості оренди з формату "$40"
        const carRentalPrice = parseInt(car.rentalPrice.replace('$', ''), 10);
        return carRentalPrice <= numericRentalPrice;
      });
    }

    // Фільтрація за діапазоном пройдених миль
    if (data.mileageFrom && data.mileageTo) {
      filteredCars = filteredCars.filter(
        car => car.mileage >= data.mileageFrom && car.mileage <= data.mileageTo
      );
    }

    console.log(filteredCars);
    return filteredCars;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

// import axios from 'axios';

// axios.defaults.baseURL = 'https://65b990b1b71048505a8af271.mockapi.io/';

// export const getAllCars = async (page = 1, pageSize = 12) => {
//   try {
//     const res = await axios.get('cars', {
//       params: {
//         page: page,
//         limit: pageSize,
//       },
//     });
//     console.log(res.data, 'CARS.JS ');
//     return res.data;
//   } catch (error) {
//     console.error('Error fetching cars:', error);
//     throw error;
//   }
// };
