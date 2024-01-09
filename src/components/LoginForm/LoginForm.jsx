import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import {
  LoginContainer,
  StyledLoginButton,
  StyledLoginForm,
  StyledLoginFormIput,
  StyledLoginFormLabel,
} from './LaginFormStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginContainer>
      <StyledLoginForm onSubmit={handleSubmit} autoComplete="off">
        <StyledLoginFormLabel>
          Email
          <StyledLoginFormIput
            type="email"
            name="email"
            placeholder="Enter your name"
          />
        </StyledLoginFormLabel>
        <StyledLoginFormLabel>
          Password
          <StyledLoginFormIput
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </StyledLoginFormLabel>
        <StyledLoginButton type="submit">Log In</StyledLoginButton>
      </StyledLoginForm>
    </LoginContainer>
  );
};
