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
import sprite from '../../images/sprite.svg';

import FavoriteItem from 'components/FavoriteItem/FavoriteItem';
import CarModal from 'components/CarModal/CarModal';

const FavoriteCard = () => {
  const [favorites, setFavorites] = useState([]);
  /////////////////////////////////////////////////////////
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  //////////////////////////////////////////////////////////

  useEffect(() => {
    // Отримати дані з localStorage при ініціалізації компонента
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id, title) => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex(item => item.id === id);
    // if (index === -1) {
    //   // Додати улюблений елемент
    //   updatedFavorites.push({ id, title });
    // } else {
    // Видалити улюблений елемент
    updatedFavorites.splice(index, 1);
    // }
    setFavorites(updatedFavorites); // Оновити стан компонента
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Оновити localStorage
  };

  return (
    <>
      {favorites.map(car => {
        // return (
        //   <FavoriteItem
        //     key={item.id}
        //     car={item}
        //     toggleFavorite={toggleFavorite}
        //   />
        // );

        const parts = car.address.split(', ');
        const city = parts[1]; // "Kharkiv"
        const country = parts[2];
        const price = Number(car.rentalPrice.replace('$', ''));
        const quality = price >= 30 ? 'Premium' : 'Econom';
        return (
          // <div key={car.id}>
          //   <h3>{car.year}</h3>
          //   <SvgHeart
          //     width={24}
          //     height={24}
          //     onClick={() => toggleFavorite(car.id, car.title)}
          //     isFavorite
          //     fill="red"
          //   >
          //     <use xlinkHref={`${sprite}#icon-heart`} />
          //     {/* Ваш SVG-код */}
          //   </SvgHeart>
          // </div>
          //////////////////////////////////////////////////////////////

          <FavoriteItem car={car} toggleFavorite={toggleFavorite} />

          ///////////////////////////////////////////////////////////////
        );
      })}
    </>
  );
};

export default FavoriteCard;

//<SvgHeart
// width={24}
//height={24}
//onClick={() => toggleFavorite(car.id, car.title)}
//isFavorite
//fill="red"
//>
//<use xlinkHref={`${sprite}#icon-heart`} />
//{/* Ваш SVG-код */}
//</SvgHeart>;

//робоче
//  <div key={car.id}>
//   {/* <CardWrap>
//     <ImgWrapper
//       style={{
//         backgroundImage: `url(${
//           car.img
//             ? car.img
//             : 'https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png'
//         })`,
//       }}
//     ></ImgWrapper>
//     <SvgHeart
//       width={24}
//       height={24}
//       onClick={() => toggleFavorite(car.id, car.title)}
//       isFavorite={true}
//       // fill={isFavorite ? 'blue' : 'transparent'}
//     >
//       <use xlinkHref={`${sprite}#icon-heart`} />
//     </SvgHeart>
//     <FlexWrap>
//       <Subtitle>
//         {car.make} <Year>{car.model}</Year>, {car.year}
//       </Subtitle>
//       <p>{car.rentalPrice}</p>
//     </FlexWrap>
//     <List>
//       <Item>
//         <p>{city}</p>
//       </Item>
//       <Item>
//         <p>{country}</p>
//       </Item>
//       <Item>
//         <p>{car.rentalCompany}</p>
//       </Item>
//       <Item>
//         <p>{quality}</p>
//       </Item>
//       <Item>
//         <p>{car.type}</p>
//       </Item>
//       <Item>
//         <p>{car.model}</p>
//       </Item>
//       <Item>
//         <p>{car.id}</p>
//       </Item>
//       <Item>
//         <p>{car.accessories[0]}</p>
//       </Item>
//     </List>

//     <BtnMore type="button" onClick={openModalToggle}>
//       Learn more
//     </BtnMore>
//   </CardWrap>
//   <CarModal
//     isOpen={isModalOpen}
//     onClose={openModalToggle}
//     car={car}
//     city={city}
//     country={country}
//     quality={quality}
//   /> */}
// {/* </div> */ }
