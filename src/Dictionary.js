import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function getKeywordMeanings(response) {
    // console.log(response.data);
    setResults(response.data);
  }

  function search() {
    //SelfNote - need to decide which API I will be using in the end
    //Documentation: SheCodes Dictionary API - https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "feb0504864ab3c8o978403c9t3b099b5";
    const dictionaryApiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    //Documentation: Free Dictionary API - https://dictionaryapi.dev/
    // const dictionaryApiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(dictionaryApiURL).then(getKeywordMeanings);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handelSubmit}>
            <h4>What word do you want to look up?</h4>
            <div className="row justify-content-center">
              <input
                className="col-10"
                type="search"
                placeholder="Search for a word"
                autoFocus
                onChange={handelKeywordChange}
              />
              <button className="btn col-2 btn-primary">Search</button>
            </div>
            <div className="hint">
              Suggested words: sunset, forest, animals, rainbow...
            </div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
