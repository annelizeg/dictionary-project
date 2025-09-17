import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function getKeywordMeanings(response) {
    // console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    //SelfNote - need to decide which API I will be using in the end
    //Documentation: SheCodes Dictionary API - https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "feb0504864ab3c8o978403c9t3b099b5";
    const dictionaryApiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    //Documentation: Free Dictionary API - https://dictionaryapi.dev/
    // const dictionaryApiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(dictionaryApiURL).then(getKeywordMeanings);
  }

  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <h2>What word do you want to look up?</h2>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus
          onChange={handelKeywordChange}
        />
        <button className="btn btn-primary">Search</button>
      </form>

      <Results results={results} />
    </div>
  );
}
