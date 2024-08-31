import styles from "./contact.module.css";

const unvisible = document.getElementById("toHide");
console.log(unvisible);
const changeClassName = () => {
  unvisible.classList.add("isHidden");
};

export default function ContactItem({ contact }) {
  return (
    <>
      <div id="toHide" className={styles.wrapper} key={contact.id}>
        <ul className={styles.list}>
          <li>{contact.name}</li>
          <li>{contact.number}</li>
        </ul>
        <button onClick={changeClassName}>Delete</button>
      </div>
    </>
  );
}
