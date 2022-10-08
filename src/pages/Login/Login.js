import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/section/Section';
import styles from './Login.module.css';

export default function Login() {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Section title="Log In">
        <LoginForm />
      </Section>
    </div>
  );
}
