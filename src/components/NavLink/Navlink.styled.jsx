import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transform: scale(1);
  box-shadow: none;
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid rgba(0, 128, 75, 0.7);
    box-shadow: 0px 12px 8px 4px #0b78474d;
  }
  &.active {
    color: white;
    background-color: rgba(0, 128, 75, 0.7);
    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
  }
`;