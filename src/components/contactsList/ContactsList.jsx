import { ContactItem } from 'components/contactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts)

  const filter = useSelector(state => state.filter);
  const viewContacts = contacts
    .filter(cont => cont.name.toLowerCase().includes(filter))
    .sort((first, second) => first.name.localeCompare(second.name));

  const { contactsList } = styles;
  console.log(contacts)
  return (
    <div>
      {/* {isLoading && <Loader />}
      {isSuccess && */}
        {(contacts?.length > 0 ? (
          
          <ul className={contactsList}>
            {viewContacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
          </ul>
        ) : (
          <p className={contactsList}> No contacts available </p>
        ))}
      {/* {isError && <p className={contactsList}> Error: {error} </p>} */}
    </div>
  );
};
