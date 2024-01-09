import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  StyledDeletButton,
  StyledListItem,
  StyledListItemText,
} from 'components/ContactList/ContactListStyled';
import { formatName, formatPhoneNumber } from 'helper/Helper';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <StyledListItem key={id}>
      <StyledListItemText>
        {formatName(name)}: {formatPhoneNumber(number)}
      </StyledListItemText>
      <StyledDeletButton
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </StyledDeletButton>
    </StyledListItem>
  );
};
