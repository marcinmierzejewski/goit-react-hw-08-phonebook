import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/section/Section';
import styles from './Register.module.css';

export default function Register() {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Section title="Register">
        <RegisterForm />
      </Section>
    </div>
  );
}
