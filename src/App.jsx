// import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList//ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import FeedbackForm from "./components/Form/Form";
import { useState } from "react";
import allContacts from "./components/Contact/allContacts.json";

const addedContact = [];
const EveryContact = [...allContacts];
const searchingContact = Object.assign(addedContact, EveryContact);

function App() {
  const [inputValue, setInputValue] = useState(searchingContact);

  //funkcja, która zostanie przekazana do Formularza//
  const handleSubmit = (values, actions) => {
    console.log(values);
    setInputValue((prevState) => [...prevState, values]);
    addedContact.push(values);
    console.log(EveryContact);
    console.log(...searchingContact);
    actions.resetForm();
  };

  //funkcja, która zostanie przekazana do SearchBox oraz ContactList//
  const handleChange = (evt) => {
    const searchTerm = evt.target.value.toLowerCase();
    const filteredContacts = searchingContact.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm)
    );
    setInputValue(filteredContacts);
  };

  //funkcja do usuwania//

  const deleteContacts = (id) => {
    console.log("usuwam");
    setInputValue((prev) => prev.filter((contact) => contact.id !== id));
  };

  // const handleDelete = (id) => {
  //   console.log("usuwam");
  //   const array2 = searchingContact.filter((contact) => contact.id !== id);
  //   setInputValue(array2);
  // };

  // const FeedbackSchema = Yup.object().shape({
  //   userName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   userNumber: Yup.number()
  //     // .min(2, "Too Short!")
  //     // .max(50, "Too Long!")
  //     .typeError("you must specify a number")

  //     .required("Required"),
  // });

  // const initialValues = {
  //   userName: "",
  //   userNumber: "",
  // };

  // const FeedbackForm = () => {
  //   const nameFieldId = useId();
  //   const userFieldId = useId();

  //   const handleSubmit = (values, actions) => {
  //     console.log(values);
  //     allContacts.push();
  //     actions.resetForm();
  //   };
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <FeedbackForm onSubmit={handleSubmit} key={inputValue.id} />
      <SearchBox
        key={allContacts.id}
        value={inputValue}
        onUpdate={handleChange}
      />
      <ContactList contacts={inputValue} deleteContacts={deleteContacts} />
    </>
  );
}

export default App;
