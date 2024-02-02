import {
  HeaderList,
  HeaderWrap,
  ListItem,
  StyledLink,
  SvgHeader,
} from './Header.steled';
import sprite from '../../images/sprite.svg';
import { RentalLink } from 'components/CarModal/CarModal.styled';

export const Header = () => {
  return (
    <HeaderWrap>
      <nav>
        <HeaderList>
          <ListItem>
            <StyledLink to="/">
              Home
              <SvgHeader width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-home`} />
              </SvgHeader>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/catalog">
              Catalog
              <SvgHeader width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-catalog`} />
              </SvgHeader>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/favorites">
              Favorites
              <SvgHeader width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-heart`} />
              </SvgHeader>
            </StyledLink>
          </ListItem>
        </HeaderList>
      </nav>
      <div>
        <RentalLink
          href="tel:+380730000000"
          type="button"
          style={{ marginRight: '20px' }}
        >
          Phone
        </RentalLink>
        <RentalLink href="mailto:example@gmail.com" type="button">
          Gmail
        </RentalLink>
      </div>
    </HeaderWrap>
  );
};
