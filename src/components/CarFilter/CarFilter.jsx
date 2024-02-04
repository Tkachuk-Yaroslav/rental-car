import React, { useState } from 'react';
import makes from './makes.json';
import prices from './prices.json';
import {
  Btn,
  CarForm,
  DivMillage,
  InputMillage,
  InputMillageWrapper,
  Label,
  PriceSelect,
  SelectCarWrapper,
  SelectPriceWrapper,
  StyledSelect,
} from './CarFilter.styled';
import { useDispatch } from 'react-redux';
import { filterCars, resetCars } from '../../redux/carsThunks';

const CarFilter = ({ resetPage }) => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [fromMillage, setFromMillage] = useState('');
  const [toMillage, setToMillage] = useState('');

  // Оновлюємо стан при зміні значення селекта
  const handleSelectChange = event => {
    setSelectedMake(event.target.value);
  };

  const handleSelectPriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleFromMillageChange = event => {
    setFromMillage(event.target.value);
  };

  const handleToMillageChange = event => {
    setToMillage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const options = {
      make: selectedMake,
      rentalPrice: selectedPrice,
      mileageFrom: fromMillage,
      mileageTo: toMillage,
    };

    dispatch(filterCars(options));
  };

  const handleReset = () => {
    setSelectedMake('');
    setSelectedPrice('');
    setFromMillage('');
    setToMillage('');
    resetPage();

    const options = {
      make: '',
      rentalPrice: '',
      mileageFrom: '',
      mileageTo: '',
      page: 1,
      pageSize: 12,
    };

    dispatch(resetCars(options));
  };

  return (
    <CarForm onSubmit={handleSubmit}>
      <SelectCarWrapper>
        <Label htmlFor="makeSelect">Car brand</Label>
        <StyledSelect
          id="makeSelect"
          value={selectedMake}
          onChange={handleSelectChange}
        >
          <option value="">All</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </StyledSelect>
      </SelectCarWrapper>

      <SelectPriceWrapper>
        <Label htmlFor="priceSelect">Price To $/ 1 hour</Label>
        <PriceSelect
          id="priceSelect"
          value={selectedPrice}
          onChange={handleSelectPriceChange}
        >
          <option value="">All</option>
          {prices.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </PriceSelect>
      </SelectPriceWrapper>

      <InputMillageWrapper>
        <Label htmlFor="millage">Сar mileage / km</Label>
        <DivMillage>
          <InputMillage
            style={{
              borderRadius: '14px 0px 0px 14px',
              borderRight: '1px solid rgba(138, 138, 137, 0.20)',
            }}
            type="text"
            value={fromMillage}
            onChange={handleFromMillageChange}
            placeholder="From"
          />
          <InputMillage
            style={{ borderRadius: '0 14px 14px 0' }}
            type="text"
            value={toMillage}
            onChange={handleToMillageChange}
            placeholder="To"
          />
        </DivMillage>
      </InputMillageWrapper>

      <Btn type="submit">Search</Btn>
      <Btn type="button" onClick={handleReset}>
        Reset
      </Btn>
    </CarForm>
  );
};

export default CarFilter;
