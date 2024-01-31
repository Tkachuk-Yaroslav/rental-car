import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import React from 'react';
import { useSelector } from 'react-redux';

const CatalogList = () => {
  const cars = useSelector(state => state.cars.entities);
  return (
    <>
      <CatalogListItem />
      {cars.length > 0 ? (
        cars.map(car => {
          return (
            <div key={car.id}>
              <div>{car.make}</div>
              <div>{car.model}</div>
              <div>{car.year}</div>
            </div>
          );
        })
      ) : (
        <p>НЕМА</p>
      )}
    </>
  );
};

export default CatalogList;
