
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/authOperations';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));



export const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);


  return (
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route
        index
        element={
          <PublicRoute>
            <Homepage />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute restricted>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute restricted>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="contacts"
        element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
  );
};
