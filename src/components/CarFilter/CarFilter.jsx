// import React, { useState, useEffect } from 'react';
// import makes from './makes.json';

// const CarFilter = () => {
//   const [selectedMake, setSelectedMake] = useState('');

//   // Оновлюємо стан при зміні значення селекта
//   const handleSelectChange = event => {
//     setSelectedMake(event.target.value);
//   };

//   useEffect(() => {
//     setSelectedMake('');
//   }, []); // Очистити значення селекта при першому рендері

//   return (
//     <div>
//       <select
//         value={selectedMake}
//         onChange={handleSelectChange}
//         placeholder="Enter the text"
//       >
//         {/* <option value="">Enter the text</option> */}
//         {makes.map((make, index) => (
//           <option key={index} value={make}>
//             {make}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CarFilter;

// import React, { useState } from 'react';
// import makes from './makes.json';

// const CarFilter = () => {
//   const [selectedMake, setSelectedMake] = useState('');

//   // Оновлюємо стан при зміні значення селекта
//   const handleSelectChange = event => {
//     setSelectedMake(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="makeSelect">Car brand</label>
//       <select
//         id="makeSelect"
//         value={selectedMake}
//         onChange={handleSelectChange}
//       >
//         <option value="">Select a car brand</option>
//         {makes.map((make, index) => (
//           <option key={index} value={make}>
//             {make}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CarFilter;

import React, { useState } from 'react';
import makes from './makes.json';
import prices from './prices.json';
import {
  Btn,
  CarForm,
  DivMillage,
  InputMillage,
  InputMillageWrapper,
  SelectCarWrapper,
  SelectPriceWrapper,
  StyledSelect,
} from './CarFilter.styled';

const CarFilter = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  // Оновлюємо стан при зміні значення селекта
  const handleSelectChange = event => {
    setSelectedMake(event.target.value);
  };

  const handleSelectPriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  return (
    <CarForm>
      <SelectCarWrapper>
        <label htmlFor="makeSelect">Car brand</label>
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
        <label htmlFor="priceSelect">Price To $/ 1 hour</label>
        <select
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
        </select>
      </SelectPriceWrapper>
      <InputMillageWrapper>
        <label htmlFor="millage">Сar mileage / km</label>
        <DivMillage>
          <InputMillage
            style={{
              borderRadius: '14px 0px 0px 14px',
              borderRight: '1px solid rgba(138, 138, 137, 0.20)',
            }}
            type="text"
            placeholder="From"
          />
          <InputMillage
            style={{ borderRadius: '0 14px 14px 0' }}
            type="text"
            placeholder="To"
          />
        </DivMillage>
      </InputMillageWrapper>
      <Btn type="submit">Search</Btn>
    </CarForm>
  );
};

export default CarFilter;
