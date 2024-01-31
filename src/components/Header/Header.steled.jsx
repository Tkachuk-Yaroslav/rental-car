import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SvgHeader = styled.svg`
  stroke: blue;
  fill: transparent;
`;
