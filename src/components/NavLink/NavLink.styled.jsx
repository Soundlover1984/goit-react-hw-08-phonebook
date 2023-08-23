import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
  transform: scale(1);
  box-shadow: none;
  height: fit-content;
  border: 1px solid transparent;

  &:hover,
  &:focus {
    border: ${props =>
      props.status === 'login' || props.status === 'register'
        ? '1px solid transparent'
        : ' 1px solid rgba(13, 140, 220, 0.787)'};

    background-color: ${props =>
      props.status === 'add'
        ? 'rgba(13, 140, 220, 0.787)'
        : props.status === 'login'
        ? 'rgba(45, 196, 4, 0.7)'
        : props.status === 'register'
        ? 'rgba(248, 220, 92, 0.7)'
        : 'transparent'};

    box-shadow: ${props =>
      props.status === 'login' || props.status === 'register'
        ? '0px 14px 6px 4px #cab1b98c'
        : '0px 12px 8px 4px #0b78474d'};
  }

  &.active {
    color: white;
    background-color: rgba(13, 140, 220, 0.787);

    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
  }

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
