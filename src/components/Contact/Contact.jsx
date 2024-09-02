import styles from "./contact.module.css";
import PropTypes from "prop-types";

// const unvisible = document.getElementById("toHide");
// console.log(unvisible);
// const changeClassName = () => {
//   unvisible.classList.add("isHidden");
// };

export default function ContactItem({ contact, deleteContacts }) {
  return (
    <>
      <ul key={contact.id} className={styles.list}>
        <li>{contact.name}</li>
        <li>{contact.number}</li>
      </ul>
      <button onClick={() => deleteContacts(contact.id)}>Delete</button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
