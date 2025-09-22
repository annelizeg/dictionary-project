import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  //   console.log(props);

  const definition = props.meaning.definition;
  const example = props.meaning.example ? `"${props.meaning.example}"` : null;

  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      <div>
        <div className="definition"> {definition}</div>
        <div className="example"> {example}</div>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
