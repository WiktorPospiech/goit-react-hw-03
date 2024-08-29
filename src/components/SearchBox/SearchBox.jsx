// export default function SearchBox() {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt);
//   }
// import { useState } from "react";

// const allContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// const searchingContact = [];

const SearchBox = ({ onUpdate }) => {
  // const [inputValue, setInputValue] = useState("");
  // const handleChange = (evt) => {
  //   setInputValue(evt.target.value);
  //   searchingContact.splice(0);

  //   console.log(evt.target.value);
  //   console.log(inputValue);
  //   console.log(...allContacts);
  //   console.log(...searchingContact);
  //   for (const contact of allContacts) {
  //     {
  //       console.log(contact.name);
  //       console.log(contact.name.includes(evt.target.value));
  //       console.log(contact.name.indexOf(evt.target.value));
  //       contact.name.includes(evt.target.value) &&
  //         searchingContact.push(contact);
  //       console.log(...searchingContact);
  //     }
  //   }
  // };

  return (
    <>
      <p>Find contact by name</p>

      <input onChange={onUpdate} type="text" name="wanted" />
    </>
  );
};

export default SearchBox;
