import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item} key={id}>
      {name}: {number}
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
