import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledContainer } from './AppStyle';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/api';
import { useEffect } from 'react';
import { selectIsLoading } from '../redux/selectors';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/LoginPage/Login';
import { Registeration } from 'pages/RegisterPage/Register';
import Home from 'pages/HomePage/Home';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registeration />} />
    </Routes>
  );
};
