import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function getKeywordMeanings(response) {
    // console.log(response.data);
    setResults(response.data);
  }

  function handelPexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //SelfNote - need to decide which API I will be using in the end
    //Documentation: SheCodes Dictionary API - https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "feb0504864ab3c8o978403c9t3b099b5";
    const dictionaryApiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    //Documentation: Free Dictionary API - https://dictionaryapi.dev/
    // const dictionaryApiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(dictionaryApiURL).then(getKeywordMeanings);

    //Documentation: Pexels Images/Videos API - https://www.pexels.com/api/documentation?language=javascript#introduction
    const pexelsApiKey =
      "7LiLP7QOB5wMYTTiXOfk5S2LFFke2cLauEI2gYEGr9ofmhFQZGXj1OSo";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    const headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handelPexelsResponse);
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
              <button className="btn col-2">Search</button>
            </div>
            <div className="hint">
              Suggested words: sunset, wine, forest, animals, rainbow...
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
