import { HeaderList, ListItem, StyledLink, SvgHeader } from './Header.steled';
import sprite from '../../images/sprite.svg';

export const Header = () => {
  return (
    <header>
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
    </header>
  );
};
