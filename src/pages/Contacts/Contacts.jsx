import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Circles } from 'react-loader-spinner';

import css from './Contacts.module.css';
import { StyledContainer } from './ContactsPageStyled';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        <Section title="Phonebook">
          <Form />
        </Section>
        {isLoading && <Loader />}
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
        <Toaster position="top-right" />
      </StyledContainer>
    </>
  );
}
