import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

import { StyledContainer } from './ContactsPageStyled';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
