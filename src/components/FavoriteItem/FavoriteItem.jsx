import React, { useState, useEffect } from 'react';
import {
  BtnMore,
  CardWrap,
  FlexWrap,
  ImgWrapper,
  Item,
  List,
  Subtitle,
  SvgHeart,
  Year,
} from '../CatalogListItem/CatalogListItem.styled';
import CarModal from 'components/CarModal/CarModal';
import sprite from '../../images/sprite.svg';

const FavoriteItem = ({ car, toggleFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const parts = car.address.split(', ');
  const city = parts[1]; // "Kharkiv"
  const country = parts[2];
  const price = Number(car.rentalPrice.replace('$', ''));
  const quality = price >= 30 ? 'Premium' : 'Econom';

  //   useEffect(() => {
  //     // Отримати дані про улюблені оголошення з localStorage при завантаженні
  //     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //     // Перевірити, чи поточне оголошення є серед улюблених
  //     const isCarFavorite = favorites.some(item => item.id === car.id);
  //     setIsFavorite(isCarFavorite);
  //   }, [car.id]); // Запустити ефект лише при зміні ID автомобіля

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  //   const toggleFavorite = () => {
  //     setIsFavorite(!isFavorite);
  //     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //     if (!isFavorite) {
  //       // Додати улюблений елемент
  //       favorites.push(car);
  //       localStorage.setItem('favorites', JSON.stringify(favorites));
  //     } else {
  //       // Видалити улюблений елемент
  //       const updatedFavorites = favorites.filter(item => item.id !== car.id);
  //       localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  //     }
  //     // Оновити дані у localStorage
  //   };

  return (
    <>
      <CardWrap>
        <ImgWrapper
          style={{
            backgroundImage: `url(${
              car.img
                ? car.img
                : 'https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png'
            })`,
          }}
        ></ImgWrapper>
        <SvgHeart
          width={24}
          height={24}
          onClick={() => toggleFavorite(car.id, car.title)}
          isFavorite={true}
          // fill={isFavorite ? 'blue' : 'transparent'}
        >
          <use xlinkHref={`${sprite}#icon-heart`} />
        </SvgHeart>
        <FlexWrap>
          <Subtitle>
            {car.make} <Year>{car.model}</Year>, {car.year}
          </Subtitle>
          <p>{car.rentalPrice}</p>
        </FlexWrap>
        <List>
          <Item>
            <p>{city}</p>
          </Item>
          <Item>
            <p>{country}</p>
          </Item>
          <Item>
            <p>{car.rentalCompany}</p>
          </Item>
          <Item>
            <p>{quality}</p>
          </Item>
          <Item>
            <p>{car.type}</p>
          </Item>
          <Item>
            <p>{car.model}</p>
          </Item>
          <Item>
            <p>{car.id}</p>
          </Item>
          <Item>
            <p>{car.accessories[0]}</p>
          </Item>
        </List>

        <BtnMore type="button" onClick={openModalToggle}>
          Learn more
        </BtnMore>
      </CardWrap>
      <CarModal
        isOpen={isModalOpen}
        onClose={openModalToggle}
        car={car}
        city={city}
        country={country}
        quality={quality}
      />
    </>
  );
};

export default FavoriteItem;
