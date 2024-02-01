import React, { useState, useEffect } from 'react';
import FavoriteItem from 'components/FavoriteItem/FavoriteItem';

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
    <>
      {favorites.map(car => {
        return (
          <FavoriteItem
            car={car}
            toggleFavorite={toggleFavorite}
            key={car.id}
          />
        );
      })}
    </>
  );
};

export default FavoriteCard;
