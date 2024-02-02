import React, { useState, useEffect } from 'react';
import FavoriteItem from 'components/FavoriteItem/FavoriteItem';
import { ListOfCars } from 'components/CatalogList/CatalogList.styled';
import { HaveNotFav } from './FavoritesCard.styled';

const FavoriteCard = () => {
  const [favorites, setFavorites] = useState([]);

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

  return (
    <ListOfCars>
      {favorites.length > 0 ? (
        favorites.map(car => {
          return (
            <FavoriteItem
              car={car}
              toggleFavorite={toggleFavorite}
              key={car.id}
            />
          );
        })
      ) : (
        <HaveNotFav>You don't have any favorite cars yet!</HaveNotFav>
      )}
    </ListOfCars>
  );
};

export default FavoriteCard;
