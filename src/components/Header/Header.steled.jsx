import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ListItem = styled.li`
  padding: 10px;
  width: 120px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'ManropeSemiBold';
  font-size: 18px;
  line-height: 143%;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SvgHeader = styled.svg`
  stroke: blue;
  fill: transparent;
`;
