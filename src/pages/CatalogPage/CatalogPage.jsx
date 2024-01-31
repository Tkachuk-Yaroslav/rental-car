// import { getAllCars } from 'api/cars';
// import React, { useEffect, useState } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/carsThunks';
import CatalogList from 'components/CatalogList/CatalogList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.entities);
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
  console.log(cars, 'масив який буде мапатись');
  return (
    <>
      <div>Filter</div>
      <CatalogList />
    </>
  );
};

export default CatalogPage;
