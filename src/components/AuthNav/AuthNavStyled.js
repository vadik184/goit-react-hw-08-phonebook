import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavSyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #546c8c;
  &.active {
    color: purple;
  }
`;
