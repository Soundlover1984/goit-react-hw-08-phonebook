import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { Container, MainHeader, SubHeader } from './Contacts.styled';

export const Contacts = () => {
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