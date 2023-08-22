import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogStatus } from 'redux/selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectLogStatus);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};