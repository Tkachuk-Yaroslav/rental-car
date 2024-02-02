// import { getAllCars } from 'api/cars';
// import React, { useEffect, useState } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/carsThunks';
import CatalogList from 'components/CatalogList/CatalogList';
import CarFilter from 'components/CarFilter/CarFilter';
import { ColorRing } from 'react-loader-spinner';
import { CenteredColorRing } from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.entities);
  const isLoading = useSelector(state => state.cars.isLoading);
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
      {isLoading && (
        <CenteredColorRing>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </CenteredColorRing>
      )}
      <div>Filter</div>
      <CarFilter />
      <CatalogList />
    </>
  );
};

export default CatalogPage;
