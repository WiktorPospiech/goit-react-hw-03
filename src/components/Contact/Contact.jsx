import styles from "./contact.module.css";
import MatchingContact from "../SearchBox/SearchBox";

const allContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const ContactTheme = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => {
        return (
          <div className={styles.wrapper} key={contact.id}>
            <ul className={styles.list}>
              <li>{contact.name}</li>
              <li>{contact.number}</li>
            </ul>
            <button>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default function ContactItem() {
  return (
    <>
      <ContactTheme contacts={allContacts} />
    </>
  );
}
