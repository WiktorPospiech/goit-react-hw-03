import ContactItem from "../Contact/Contact";
import styles from "../ContactList/contact.module.css";
import PropTypes from "prop-types";

export default function ContactList({ contacts, deleteContacts }) {
  return (
    <>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.wrapper}>
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContacts={deleteContacts}
          />
        </div>
      ))}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
