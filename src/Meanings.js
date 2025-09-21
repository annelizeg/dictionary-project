import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  //   console.log(props);

  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      <div>
        <strong>Definition:</strong> {props.meaning.definition}
        <br />
        <strong>Example:</strong> <em>{props.meaning.example}</em>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
