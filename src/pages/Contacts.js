import { PhoneBook } from '../components/phoneBook/PhoneBook';
import { ContactsList } from '../components/contactsList/ContactsList';
import { SearchFilter } from '../components/searchFilter/SearchFilter';
import { Section } from '../components/section/Section';
// import styles from './App.module.css';

const styles = {
  wrapper: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: 'rgb(241, 241, 239)',
    borderTopRightRadius: '50px',
    borderBottomLeftRadius: '50px',
    boxShadow: '2px 2px 10px rgb(39, 37, 37)',
  },
};

export default function Contacts() {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <SearchFilter />
        <ContactsList />
      </Section>
    </div>
  );
};