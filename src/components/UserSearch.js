import React, { useState } from "react";

const UserSearch = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(() => {
      return value;
    });
  };

  return (
    <form
      onSubmit={(e) => {
        handleSearch(e, input);
      }}
    >
      <input onChange={handleInput} value={input} type="text" />
      <button type="submit">Find</button>
      <button
        onClick={(e) => {
          handleSearch(e, "");
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default UserSearch;
