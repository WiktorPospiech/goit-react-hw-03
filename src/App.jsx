// import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList//ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import FeedbackForm from "./components/Form/Form";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <FeedbackForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
