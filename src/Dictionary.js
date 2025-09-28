import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  // STATES
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  // Set results to Dictionary API response and call photoSearch function
  function getKeywordMeanings(response) {
    if (response.data.status !== "not_found") {
      setResults(response.data);
      photoSearch();
    } else {
      alert(
        "Sorry, we couldn't find the word you were looking for. Please try again."
      );
    }
  }

  // Get Photos from Pexels API
  function photoSearch() {
    //Documentation: Pexels Images/Videos API - https://www.pexels.com/api/documentation?language=javascript#introduction
    const pexelsApiKey =
      "7LiLP7QOB5wMYTTiXOfk5S2LFFke2cLauEI2gYEGr9ofmhFQZGXj1OSo";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handelPexelsResponse);
  }

  function handelPexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  // Get keyword from Dictionary API
  function search() {
    //Documentation: SheCodes Dictionary API - https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "feb0504864ab3c8o978403c9t3b099b5";
    const dictionaryApiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios
      .get(dictionaryApiURL)
      .then(getKeywordMeanings)
      .catch((error) => {
        console.log(error);
        alert("Sorry, an unexpected error occured. Please try again.");
      });
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
        <div className="form">
          <form onSubmit={handelSubmit}>
            <h4>What word do you want to look up?</h4>
            <div className="row justify-content-center">
              <div className="col col-sm-6">
                <input
                  type="search"
                  placeholder="Search for a word"
                  autoFocus="on"
                  onChange={handelKeywordChange}
                  value={keyword}
                  onFocus={() => setKeyword("")} // clears on focus
                />
                <div className=" hint">
                  Suggested words: sunset, wine, forest, animals...
                </div>{" "}
              </div>
              <div className="col-0 col-sm-3 col-md-2">
                <button className="btn ">Search</button>
              </div>
            </div>
          </form>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
