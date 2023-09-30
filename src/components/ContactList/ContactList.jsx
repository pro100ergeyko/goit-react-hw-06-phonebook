import { useDispatch, useSelector } from 'react-redux';
import { IoPersonRemove } from 'react-icons/io5';
import { deleteContact } from 'redux/contactsSlice';
import { Btn, Item, Span } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDeletContacts = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    dispatch(deleteContact(newContacts));
  };

  const getFilteredContact = () => {
    const normalizedFilterQuery = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterQuery)
    );
  };

  const fitterContacts = getFilteredContact();

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
