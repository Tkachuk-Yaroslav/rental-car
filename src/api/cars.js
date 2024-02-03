// import axios from 'axios';

// axios.defaults.baseURL = 'https://65b990b1b71048505a8af271.mockapi.io/';

// export const getAllCars = async data => {
//   try {
//     const res = await axios.get('cars');

//     // Якщо дані для фільтрації не передано, повертаємо всі записи без фільтрації
//     // if (!data.make) {
//     if (!data.make && data.rentalPrice && data.mileageFrom && data.mileageTo) {
//       console.log(res.data);
//       return res.data;
//     }

//     let filteredCars = res.data;

//     // Фільтрація за маркою авто
//     if (data.make) {
//       filteredCars = filteredCars.filter(car => car.make === data.make);
//     }

//     // Фільтрація за вартістю оренди
//     if (data.rentalPrice) {
//       const numericRentalPrice = parseInt(data.rentalPrice, 10); // Конвертуємо у числовий тип даних
//       filteredCars = filteredCars.filter(car => {
//         // Отримуємо числове значення вартості оренди з формату "$40"
//         const carRentalPrice = parseInt(car.rentalPrice.replace('$', ''), 10);
//         return carRentalPrice <= numericRentalPrice;
//       });
//     }

//     // Фільтрація за діапазоном пройдених миль
//     if (data.mileageFrom && data.mileageTo) {
//       filteredCars = filteredCars.filter(
//         car => car.mileage >= data.mileageFrom && car.mileage <= data.mileageTo
//       );
//     }

//     console.log(filteredCars);
//     return filteredCars;
//   } catch (error) {
//     console.error('Error fetching cars:', error);
//     throw error;
//   }
// };

import axios from 'axios';

axios.defaults.baseURL = 'https://65b990b1b71048505a8af271.mockapi.io/';

export const getCars = async data => {
  try {
    const res = await axios.get('cars');

    const filteredCars = res.data;

    // Фільтрація за маркою авто, вартістю оренди, діапазоном пройдених миль
    // let filteredCars = res.data.filter(car => {
    //   let includeCar = true;
    //   if (data.make && car.make !== data.make) {
    //     includeCar = false;
    //   }
    //   if (
    //     data.rentalPrice &&
    //     parseInt(car.rentalPrice.replace('$', ''), 10) >
    //       parseInt(data.rentalPrice, 10)
    //   ) {
    //     includeCar = false;
    //   }
    //   if (
    //     data.mileageFrom &&
    //     data.mileageTo &&
    //     (car.mileage < data.mileageFrom || car.mileage > data.mileageTo)
    //   ) {
    //     includeCar = false;
    //   }
    //   return includeCar;
    // });

    // Визначення індексу початку та кінця для сторінки
    const startIndex = (data.page - 1) * data.pageSize;
    const endIndex = startIndex + data.pageSize;
    const carsForPage = filteredCars.slice(startIndex, endIndex);
    // return carsForPage;
    return {
      // cars: filteredCars,
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

    // Фільтрація за маркою авто, вартістю оренди, діапазоном пройдених миль
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
        data.mileageFrom &&
        data.mileageTo &&
        (car.mileage < data.mileageFrom || car.mileage > data.mileageTo)
      ) {
        includeCar = false;
      }
      return includeCar;
    });

    // Визначення індексу початку та кінця для сторінки
    const startIndex = (data.page - 1) * data.pageSize;
    const endIndex = startIndex + data.pageSize;
    const carsForPage = filteredCars.slice(startIndex, endIndex);
    // return carsForPage;
    return {
      // cars: filteredCars,
      cars: filteredCars,
      totalCount: filteredCars.length,
    };
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};
