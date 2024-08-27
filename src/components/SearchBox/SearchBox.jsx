// export default function SearchBox() {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt);
//   }
import { useState } from "react";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <>
      <p>Find contact by name</p>
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={inputValue}
          name="name"
        />
      </form>
    </>
  );
}
