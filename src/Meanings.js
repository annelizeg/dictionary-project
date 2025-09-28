import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

/* Display the indevidual keyword meanings */

export default function Meanings(props) {
  const definition = props.meaning.definition;
  const example = props.meaning.example ? `"${props.meaning.example}"` : null;

  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      <div className="descriptions">
        <div className="definition"> {definition}</div>
        <div className="example"> {example}</div>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
