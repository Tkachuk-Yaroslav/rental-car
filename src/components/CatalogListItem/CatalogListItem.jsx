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

const CatalogListItem = () => {
  return (
    <CardWrap>
      <ImgWrapper
        style={{
          backgroundImage: `url('https://ftp.goit.study/img/cars-test-task/volvo_xc90.jpeg')`,
        }}
      >
        {/* <Img
          src="https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg"
          alt="car"
        /> */}
      </ImgWrapper>
      <FlexWrap>
        <Subtitle>
          Marka <Year>Model</Year>, Year
        </Subtitle>
        <Subtitle>Price</Subtitle>
      </FlexWrap>
      <List>
        <Item>
          <p>City</p>
        </Item>
        <Item>
          <p>Country</p>
        </Item>
        <Item>
          <p>rentalCompany</p>
        </Item>
        <Item>
          <p>PREMIUM???</p>
        </Item>
        <Item>
          <p>Type</p>
        </Item>
        <Item>
          <p>Make</p>
        </Item>
        <Item>
          <p>ID</p>
        </Item>
        <Item>
          <p>Щось не понятне</p>
        </Item>
      </List>

      <BtnMore type="button">Learn more</BtnMore>
    </CardWrap>
  );
};

export default CatalogListItem;
