import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  //   console.log(props);

  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        <h6 style={{ color: "#374151" }}>{props.results.phonetic}</h6>{" "}
        {/*SelfNote: Move style later to CSS file.  */}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
