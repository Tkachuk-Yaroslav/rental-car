import React from 'react';
import {
  BtnMore,
  CardWrap,
  FlexWrap,
  ImgWrapper,
  Item,
  List,
  Subtitle,
  Year,
} from './CatalogListItem.styled';

const CatalogListItem = ({ car }) => {
  console.log(car, 'ОДна машина');
  const parts = car.address.split(', ');
  const city = parts[1]; // "Kharkiv"
  const country = parts[2];
  const price = Number(car.rentalPrice.replace('$', ''));
  const quality = price >= 30 ? 'Premium' : 'Econom';
  return (
    <CardWrap>
      <ImgWrapper
        style={{
          backgroundImage: `url(${
            car.img
              ? car.img
              : 'https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png'
          })`,
        }}
      >
        {/* <Img
          src="https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg"
          alt="car"
        /> */}
      </ImgWrapper>
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

      <BtnMore type="button">Learn more</BtnMore>
    </CardWrap>
  );
};

export default CatalogListItem;
