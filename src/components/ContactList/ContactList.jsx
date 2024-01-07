import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

import { getFilteredContacts } from '../../redux/filter/selectors';
import { StyledList } from './ContactListStyled';

export const ContactList = () => {
  const filterContacts = useSelector(getFilteredContacts);

  return (
    <StyledList>
      {filterContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </StyledList>
  );
};
