import { Container, MainHeader, SubHeader } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { selectIsLoading } from 'redux/selectors';

export const App = () => {
  const loader = useSelector(selectIsLoading);

  return (
    <Container>
      {loader && <Loader />}
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SubHeader>Contacts</SubHeader>
      <Filter />
      <ContactList />
    </Container>
  );
};
