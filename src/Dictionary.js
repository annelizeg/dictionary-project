import React, { useState } from "react";

export default function Dictionary() {
  const [keywoord, setKeywoord] = useState("");

  function handelSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keywoord} definition`);
  }

  function handelKeywordChange(event) {
    setKeywoord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handelSearch}>
        <h2>What word do you want to look up?</h2>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus
          onChange={handelKeywordChange}
        />
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}
