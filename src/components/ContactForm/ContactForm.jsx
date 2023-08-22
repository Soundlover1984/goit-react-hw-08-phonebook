import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonForm } from 'components/ButtonForm/ButtonForm';
import { FaUserPlus } from 'react-icons/fa';
import { Label, Form } from './ContactForm.styled';
import { InputItem } from 'components/InputItem/InputItem';
import { addContact } from 'redux/contactsOperations';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { notifySettings } from 'utils/notifySettings';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const includesName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (includesName) {
      Notiflix.Notify.warning(`${name} is already in contacts` , notifySettings);
    } else {
      dispatch(addContact({ name, number }));
      Notiflix.Notify.success(
        `${name} was successfully added to your contacts` , notifySettings
      );
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <InputItem
          onChange={onInputChange}
          value={name}
          name="name"
          placeholder="Enter contact`s name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
      <Label>
        Number
        <InputItem
          onChange={onInputChange}
          value={number}
          type="tel"
          name="number"
          placeholder="Enter contact`s number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <ButtonForm
        type="submit"
        icon={FaUserPlus}
        status="add"
        text="Add contact"
      />
    </Form>
  );
};
