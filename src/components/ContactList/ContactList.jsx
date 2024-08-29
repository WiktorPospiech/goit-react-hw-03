import ContactItem from "../Contact/Contact";

export default function ContactList({ contacts }) {
  return (
    <>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
}
