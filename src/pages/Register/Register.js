// import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/section/Section';
import styles from './Register.module.css'

export default function Register() {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <Section title='Register'>
        <RegisterForm />
      </Section>
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      
    </div>
  );
}