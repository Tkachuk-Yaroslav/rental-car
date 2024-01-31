import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { ListOfCars } from './CatalogList.styled';

const CatalogList = () => {
  const cars = useSelector(state => state.cars.entities);
  return (
    <ListOfCars>
      {cars.length > 0 ? (
        cars.map(car => {
          return <CatalogListItem key={car.id} car={car} />;
        })
      ) : (
        <p>НЕМА</p>
      )}
    </ListOfCars>
  );
};

export default CatalogList;
