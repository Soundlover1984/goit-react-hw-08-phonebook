import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';

import { List } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { fetchContacts } from 'redux/contactsOperations';
import { selectFilter } from 'redux/selectors';
import { selectContacts } from 'redux/selectors';


export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      Notiflix.Notify.warning(
        'No contacts matching your request',
        notifySettings
      );
      return [];
    }
    return filteredContacts;
  };

  return (
    <>
      <List>
        {filterContacts().map(contact => {
          return (
            <ContactItem
              id={contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </List>
    </>
  );
};