import { useDispatch, useSelector } from 'react-redux';
import { IoPersonRemove } from 'react-icons/io5';
import { getFilteredContacts } from '../../redux/contactsSelectors';
import { deleteContact } from 'redux/contactsSlice';
import { Btn, Item, Span } from './ContactList.styled';

export const ContactList = () => {
  const fitterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeletContacts = contactsId => {
    dispatch(deleteContact(contactsId));
  };
  return (
    <ul>
      {fitterContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Span>{name}:</Span>
            <Span>{number}</Span>
            <Btn type="button" onClick={() => handleDeletContacts(id)}>
              <IoPersonRemove size="14" />
            </Btn>
          </Item>
        );
      })}
    </ul>
  );
};
