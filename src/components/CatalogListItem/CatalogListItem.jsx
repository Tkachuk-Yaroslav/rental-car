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
} from './CatalogListItem.styled';
import CarModal from 'components/CarModal/CarModal';
import sprite from '../../images/sprite.svg';

const CatalogListItem = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const parts = car.address.split(', ');
  const city = parts[1];
  const country = parts[2];
  const price = Number(car.rentalPrice.replace('$', ''));
  const quality = price >= 30 ? 'Premium' : 'Econom';

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isCarFavorite = favorites.some(item => item.id === car.id);
    setIsFavorite(isCarFavorite);
  }, [car.id]);

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!isFavorite) {
      favorites.push(car);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      const updatedFavorites = favorites.filter(item => item.id !== car.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

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
          onClick={toggleFavorite}
          $isFavorite={isFavorite}
          fill={isFavorite ? 'blue' : 'transparent'}
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
          <Item>{city}</Item>
          <Item>{country}</Item>
          <Item>{car.rentalCompany}</Item>
          <Item>{quality}</Item>
          <Item>{car.type}</Item>
          <Item>{car.model}</Item>
          <Item>{car.id}</Item>
          <Item>{car.accessories[0]}</Item>
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

export default CatalogListItem;
