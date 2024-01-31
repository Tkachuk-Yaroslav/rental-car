// import { getAllCars } from 'api/cars';
// import React, { useEffect, useState } from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/carsThunks';

const CatalogPage = () => {
  const dispatch = useDispatch();
  //   const [cars, setCars] = useState([]);
  useEffect(() => {
    dispatch(fetchCars());
    //     const fetchData = async () => {
    //       const data = await getAllCars();
    //       console.log(data, 'те що буде діспачиться');
    //       setCars(data);
    //     };
    //     fetchData();
  }, [dispatch]);
  //   console.log(cars, 'МІЙ МАСИВ В СТЕЙТІ');
  return (
    <>
      <div>Filter</div>
      <div>Catalog</div>
    </>
  );
};

export default CatalogPage;
