import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 18px;
  &.active {
    color: rgb(75, 62, 142);
    border-bottom: 2px solid rgb(75, 62, 142);
  }
`;

export const LinkHome = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const NavHome = styled.nav`
  display: flex;
  align-items: center;
`;
