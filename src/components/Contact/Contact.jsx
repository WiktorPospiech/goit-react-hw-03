import styles from "./contact.module.css";

export default function ContactItem({ contact }) {
  return (
    <>
      <div className={styles.wrapper} key={contact.id}>
        <ul className={styles.list}>
          <li>{contact.name}</li>
          <li>{contact.number}</li>
        </ul>
        <button>Delete</button>
      </div>
    </>
  );
}
