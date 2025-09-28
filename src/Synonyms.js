import React from "react";
import "./Synonyms.css";

/* Display the indevidual keyword synonyms */

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        <span>
          {props.synonyms.map(function (synonym, index) {
            return (
              <span key={index} className="synonym-words">
                {synonym}
              </span>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
