import { NavLink } from 'components/NavLink/NavLink';
import { useSelector } from 'react-redux';
import { selectLogStatus } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectLogStatus);
  return (
    <nav>
      <NavLink to="/" text="Homepage" />
      {isLoggedIn && <NavLink to="/contacts" text="Contacts" />}
    </nav>
  );
};