import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigatorStyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  padding-bottom: 0;
  font-weight: 700;
  border-radius: 5px;
  color: #546c8c;
  margin-bottom: 12px;
  &.active {
    color: purple;
  }
`;
export const NavigatorStyled = styled('nav')`
  background: none;
  margin-right: 250px;
`;
