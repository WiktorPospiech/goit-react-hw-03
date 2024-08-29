// import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList//ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import FeedbackForm from "./components/Form/Form";
import { useState } from "react";
import allContacts from "./components/Contact/allContacts.json";
const searchingContact = [];
function App() {
  const [inputValue, setInputValue] = useState(allContacts);

  //funkcja, która zostanie przekazana do SearchBox//
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

  return (
    <>
      <h1>Phonebook</h1>
      <FeedbackForm />
      <SearchBox
        key={allContacts.id}
        value={inputValue}
        onUpdate={handleChange}
      />
      <ContactList />
    </>
  );
}

export default App;
