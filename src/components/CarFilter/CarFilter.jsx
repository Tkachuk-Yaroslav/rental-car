import React, { useState } from 'react';
import makes from './makes.json';
import prices from './prices.json';
import {
  Btn,
  CarForm,
  DivMillage,
  InputMillage,
  InputMillageWrapper,
  InputText,
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

  const formatNumber = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleSelectChange = event => {
    setSelectedMake(event.target.value);
  };

  const handleSelectPriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleFromMillageChange = event => {
    setFromMillage(formatNumber(event.target.value.replace(/\D/g, '')));
  };

  const handleToMillageChange = event => {
    setToMillage(formatNumber(event.target.value.replace(/\D/g, '')));
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
              paddingLeft: '68px',
            }}
            type="text"
            value={fromMillage}
            onChange={handleFromMillageChange}
          />
          <InputText style={{ left: '24px' }}>From</InputText>
          <InputMillage
            style={{ borderRadius: '0 14px 14px 0', paddingLeft: '48px' }}
            type="text"
            value={toMillage}
            onChange={handleToMillageChange}
          />
          <InputText style={{ right: '120px' }}>To</InputText>
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
