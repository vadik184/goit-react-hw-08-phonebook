import { Section } from 'components/Section/Section';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { MainRegDiv } from 'pages/Register/RegisterStyle';

export default function Login() {
  return (
    <MainRegDiv>
      <Section title="Login">
        {' '}
        <LoginForm />
      </Section>
    </MainRegDiv>
  );
}
