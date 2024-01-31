import React, { useEffect } from 'react';
import {
  Accessories,
  CloseBtn,
  ConditionsItem,
  ConditionsSpan,
  ConditionsWrap,
  Description,
  FlexWrap,
  Functionalities,
  Img,
  Item,
  List,
  ModalContent,
  ModalOverlay,
  RentalLink,
  Subtitle,
  Text,
  Year,
} from './CarModal.styled';

const CarModal = ({ isOpen, onClose, car, city, country, quality }) => {
  console.log(car, 'МОДАЛКА');

  // Розділити рядок на три частини за символом \n
  const conditionsArray = car.rentalConditions.split('\n');

  // Зберегти кожну частину в окрему змінну
  const minimumAgeString = conditionsArray[0]; // "Minimum age: 21"
  const minimumAgeArray = minimumAgeString.split(': ');
  const minimumAge = parseInt(minimumAgeArray[1], 10);

  const validLicense = conditionsArray[1]; // "Valid driver's license"
  const thirdRentalConditions = conditionsArray[2];

  const formattedMileage = car.mileage.toLocaleString('en-US');

  const formattedPrice = car.rentalPrice.slice(1) + car.rentalPrice[0];
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    isOpen && (
      <ModalOverlay onClick={handleBackdropClick}>
        <ModalContent onClick={handleModalClick}>
          <CloseBtn onClick={onClose}>✕</CloseBtn>
          <Img
            src={
              car.img
                ? car.img
                : 'https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png'
            }
            alt="Modal car"
          />
          <FlexWrap>
            <Subtitle>
              {car.make} <Year>{car.model}</Year>, {car.year}
            </Subtitle>
          </FlexWrap>
          <List>
            <Item>
              <p>{city}</p>
            </Item>
            <Item>
              <p>{country}</p>
            </Item>
            <Item>
              <p>Id:{car.id}</p>
            </Item>
            <Item>
              <p>Year:{car.year}</p>
            </Item>
            <Item>
              <p>Type:{car.type}</p>
            </Item>
            <Item>
              <p>Fuel Consumption:{car.fuelConsumption}</p>
            </Item>
            <Item>
              <p>Engine Size:{car.engineSize}</p>
            </Item>
          </List>
          <Description>{car.description}</Description>
          <Text>Accessories and functionalities:</Text>
          <Accessories>
            <Item>
              <p>{car.accessories[0]}</p>
            </Item>
            <Item>
              <p>{car.accessories[1]}</p>
            </Item>
            <Item>
              <p>{car.accessories[2]}</p>
            </Item>
          </Accessories>
          <Functionalities>
            <Item>
              <p>{car.functionalities[0]}</p>
            </Item>
            <Item>
              <p>{car.functionalities[1]}</p>
            </Item>
            <Item>
              <p>{car.functionalities[2]}</p>
            </Item>
          </Functionalities>
          <Text>Rental Conditions:</Text>
          <ConditionsWrap>
            <ConditionsItem>
              Minimum age: <ConditionsSpan>{minimumAge}</ConditionsSpan>
            </ConditionsItem>
            <ConditionsItem>{validLicense}</ConditionsItem>
            <ConditionsItem>{thirdRentalConditions}</ConditionsItem>
            <ConditionsItem>
              Mileage: <ConditionsSpan>{formattedMileage}</ConditionsSpan>
            </ConditionsItem>
            <ConditionsItem>
              Price: <ConditionsSpan>{formattedPrice}</ConditionsSpan>
            </ConditionsItem>
          </ConditionsWrap>
          <RentalLink href="tel:+380730000000" type="button">
            Rental car
          </RentalLink>
        </ModalContent>
      </ModalOverlay>
    )
  );
};

export default CarModal;
// 460 248
