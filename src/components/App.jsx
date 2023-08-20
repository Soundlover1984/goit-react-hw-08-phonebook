// import { Container, MainHeader, SubHeader } from './App.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Loader } from './Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { selectIsLoading } from 'redux/selectors';
import { fetchCurrentUser } from 'redux/authOperations';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';

const Home = lazy(() => import('./Home/Home'));
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const Contacts = lazy(() => import('./Contacts/Contacts'));




export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const loader = useSelector(state => state.contacts.isLoading);



  return (
    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
    // <Container>
    //   {loader && <Loader />}
    //   <MainHeader>Phonebook</MainHeader>
    //   <ContactForm />
    //   <SubHeader>Contacts</SubHeader>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
};
