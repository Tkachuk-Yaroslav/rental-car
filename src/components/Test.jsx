import React, { useState, useEffect } from 'react';
import { SvgHeart } from './CatalogListItem/CatalogListItem.styled';

const FavoriteCard = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Отримати дані з localStorage при ініціалізації компонента
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id, title) => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex(item => item.id === id);
    if (index === -1) {
      // Додати улюблений елемент
      updatedFavorites.push({ id, title });
    } else {
      // Видалити улюблений елемент
      updatedFavorites.splice(index, 1);
    }
    setFavorites(updatedFavorites); // Оновити стан компонента
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Оновити localStorage
  };

  return (
    <>
      {favorites.map(item => (
        <div key={item.id}>
          <h3>{item.year}</h3>
          <SvgHeart
            width={24}
            height={24}
            onClick={() => toggleFavorite(item.id, item.title)}
            isFavorite
            fill="red"
          >
            {/* Ваш SVG-код */}
          </SvgHeart>
        </div>
      ))}
    </>
  );
};

export default FavoriteCard;
