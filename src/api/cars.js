import axios from 'axios';

axios.defaults.baseURL = 'https://65b990b1b71048505a8af271.mockapi.io/';

export const getAllCars = async () => {
  const res = await axios.get('cars');
  console.log(res.data);
  return res.data;
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
