import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { HaveNotCars, ListOfCars } from './CatalogList.styled';

const CatalogList = ({ incrementPage }) => {
  const handleLoadMore = () => {
    incrementPage(); // Збільшуємо сторінку
  };
  const cars = useSelector(state => state.cars.entities);
  return (
    <ListOfCars>
      {cars.length > 0 ? (
        cars.map(car => {
          return <CatalogListItem key={car.id} car={car} />;
        })
      ) : (
        <HaveNotCars>Sorry, we don't have any cars like this!</HaveNotCars>
      )}
      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </ListOfCars>
  );
};

export default CatalogList;
