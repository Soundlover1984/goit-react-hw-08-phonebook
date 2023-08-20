import { Link } from './NavLink.styled';

export const NavLink = ({ to, text }) => {
  return <Link to={to}>{text}</Link>;
};