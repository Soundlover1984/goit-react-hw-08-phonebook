import { NavLink } from 'components/NavLink/NavLink';

export const UserLoginMenu = () => {
  return (
    <div>
      <NavLink to="/register" text="Register" />
      <NavLink to="/login" text="Log in" />
    </div>
  );
};