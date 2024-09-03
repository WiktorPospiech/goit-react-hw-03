// import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList//ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import FeedbackForm from "./components/Form/Form";
import { useState, useEffect } from "react";
import allContacts from "./components/Contact/allContacts.json";

// const addedContact = [];
// const EveryContact = [...allContacts];
// const searchingContact = Object.assign(addedContact, EveryContact);
// // const savedContact = JSON.parse(window.localStorage.getItem("saved-contact"));

function App() {
  const [allContactsState, setAllContactsState] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contact")
    );
    return savedContacts || allContacts;
  });

  const [displayedContacts, setDisplayedContacts] = useState(allContactsState);
  // const [inputValue, setInputValue] = useState(searchingContact);
  // console.log(inputValue);

  //funkcja, która zostanie przekazana do Formularza//
  const handleSubmit = (values, actions) => {
    console.log(values);
    const updatedContacts = [...allContactsState, values];
    setAllContactsState(updatedContacts);
    setDisplayedContacts(updatedContacts);
    actions.resetForm();
  };

  //funkcja, która zostanie przekazana do SearchBox oraz ContactList//
  const handleChange = (evt) => {
    const searchTerm = evt.target.value.toLowerCase();
    const filteredContacts = allContactsState.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm)
    );
    setDisplayedContacts(filteredContacts);
  };

  //funkcja do usuwania//

  const deleteContacts = (id) => {
    const updatedContacts = allContactsState.filter(
      (contact) => contact.id !== id
    );
    setAllContactsState(updatedContacts);
    setDisplayedContacts(updatedContacts);
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
  useEffect(() => {
    window.localStorage.setItem(
      "saved-contact",
      JSON.stringify(allContactsState)
    );
  }, [allContactsState]);

  return (
    <>
      <h1>Phonebook</h1>
      <FeedbackForm onSubmit={handleSubmit} key={allContactsState.id} />
      <SearchBox
        // key={allContacts.id}
        // value={inputValue}
        onUpdate={handleChange}
      />
      <ContactList
        contacts={displayedContacts}
        deleteContacts={deleteContacts}
      />
    </>
  );
}

export default App;
