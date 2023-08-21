import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogStatus } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLogStatus);

  return isLoggedIn ? children : <Navigate to="/" />;
};