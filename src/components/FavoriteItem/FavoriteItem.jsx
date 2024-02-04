import React, { useState } from 'react';
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
  const parts = car.address.split(', ');
  const city = parts[1]; // "Kharkiv"
  const country = parts[2];
  const price = Number(car.rentalPrice.replace('$', ''));
  const quality = price >= 30 ? 'Premium' : 'Econom';

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
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
          onClick={() => toggleFavorite(car.id)}
          fill="blue"
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

export default FavoriteItem;
