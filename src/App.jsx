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
  const [inputValue, setInputValue] = useState(allContacts);

  //funkcja, która zostanie przekazana do Formularza//
  const handleSubmit = (values, actions) => {
    console.log(values);
    addedContact.push(values);
    console.log(EveryContact);
    console.log(...searchingContact);
    actions.resetForm();
  };

  //funkcja, która zostanie przekazana do SearchBox oraz ContactList//
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
    searchingContact.splice(0);

    for (const contact of allContacts) {
      {
        contact.name.toLowerCase().includes(evt.target.value.toLowerCase()) &&
          searchingContact.push(contact);
        console.log(...searchingContact);
      }
    }
  };

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
      <FeedbackForm onSubmit={handleSubmit} key={allContacts.id} />
      <SearchBox
        key={allContacts.id}
        value={inputValue}
        onUpdate={handleChange}
      />
      <ContactList contacts={searchingContact} />
    </>
  );
}

export default App;
