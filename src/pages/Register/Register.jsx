import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';
import { MainRegDiv } from './RegisterStyle';

export default function Register() {
  return (
    <MainRegDiv>
      <Section title="Registration">
        <RegisterForm />
      </Section>
    </MainRegDiv>
  );
}
