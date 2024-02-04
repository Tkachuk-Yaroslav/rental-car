import React, { useState, useEffect } from 'react';
import FavoriteItem from 'components/FavoriteItem/FavoriteItem';
import { ListOfCars } from 'components/CatalogList/CatalogList.styled';
import { Btn, HaveNotFav } from './FavoritesCard.styled';

const FavoriteCard = () => {
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 4; 

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = id => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex(item => item.id === id);

    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const visibleFavorites = favorites.slice(0, page * pageSize);

  return (
    <ListOfCars>
      {visibleFavorites.length > 0 ? (
        visibleFavorites.map(car => (
          <FavoriteItem
            car={car}
            toggleFavorite={toggleFavorite}
            key={car.id}
          />
        ))
      ) : (
        <HaveNotFav>You don't have any favorite cars yet!</HaveNotFav>
      )}
      {favorites.length > visibleFavorites.length && (
        <Btn type="button" onClick={handleLoadMore}>
          Load more
        </Btn>
      )}
    </ListOfCars>
  );
};

export default FavoriteCard;
