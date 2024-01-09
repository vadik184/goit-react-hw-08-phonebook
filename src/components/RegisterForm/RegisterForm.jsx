import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  RegisterContainer,
  StyledRegisterButton,
  StyledRegisterForm,
  StyledRegisterFormIput,
  StyledRegisterFormLabel,
} from './RegisterFormStyled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterContainer>
      <StyledRegisterForm onSubmit={handleSubmit} autoComplete="off">
        <StyledRegisterFormLabel>
          Username
          <StyledRegisterFormIput
            type="text"
            name="name"
            placeholder="Enter name"
          />
        </StyledRegisterFormLabel>
        <StyledRegisterFormLabel>
          Email
          <StyledRegisterFormIput
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </StyledRegisterFormLabel>
        <StyledRegisterFormLabel>
          Password
          <StyledRegisterFormIput
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </StyledRegisterFormLabel>
        <StyledRegisterButton type="submit">Registration</StyledRegisterButton>
      </StyledRegisterForm>
    </RegisterContainer>
  );
};
