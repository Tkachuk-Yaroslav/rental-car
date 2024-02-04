import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { HaveNotCars, ListOfCars } from './CatalogList.styled';
import { Btn } from 'components/FavoriteCard/FavoritesCard.styled';

const PAGE_SIZE = 12;

const CatalogList = ({ incrementPage, page }) => {
  const isHideBtn = useSelector(state => state.cars.hideButton);
  const totalCount = useSelector(state => state.cars.totalCount);

  const maxPage = Math.ceil(totalCount / PAGE_SIZE);

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
      {!isHideBtn && page < maxPage && (
        <Btn type="button" onClick={handleLoadMore}>
          Load More
        </Btn>
      )}
    </ListOfCars>
  );
};

export default CatalogList;
