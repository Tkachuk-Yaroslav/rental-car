import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { HaveNotCars, ListOfCars } from './CatalogList.styled';
import { Btn } from 'components/FavoriteCard/FavoritesCard.styled';
import { CenteredColorRing } from 'pages/CatalogPage/CatalogPage.styled';
import { ColorRing } from 'react-loader-spinner';
import {
  getCars,
  getHideButton,
  getIsLoading,
  getTotalCount,
} from '../../redux/selectors';

const PAGE_SIZE = 12;

const CatalogList = ({ incrementPage, page }) => {
  const isLoading = useSelector(getIsLoading);
  const isHideBtn = useSelector(getHideButton);
  const totalCount = useSelector(getTotalCount);
  const cars = useSelector(getCars);

  const maxPage = Math.ceil(totalCount / PAGE_SIZE);

  const handleLoadMore = () => {
    incrementPage();
  };
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
    </ListOfCars>
  );
};

export default CatalogList;
