import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  AvatarWrapper,
  ListItem,
  ContentWrapper,
  ConfirmationText,
  TextWrapper,
  Hint,
} from './ModalDelete.styled';
import Avatar from '../../images/delete.gif';
import { ButtonForm } from 'components/ButtonForm/ButtonForm';
import { deleteContact } from 'redux/contactsOperations';

export const ModalDeleteConfirmation = ({ id, closeModal, name }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ContentWrapper>
        <AvatarWrapper>
          <img src={Avatar} alt="avatar" />
        </AvatarWrapper>
        <TextWrapper>
          <ConfirmationText>
            Are you sure you want to delete <span>{name}</span> from your
            phonebook ?
          </ConfirmationText>
          <Hint>This action cannot be reversed</Hint>
          <ButtonForm
            icon={MdDelete}
            type="button"
            status="delete"
            text="Confirm delete"
            onClick={() => {
              dispatch(deleteContact(id));
              closeModal();
            }}
          />
        </TextWrapper>
      </ContentWrapper>
    </ListItem>
  );
};

ModalDeleteConfirmation.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};