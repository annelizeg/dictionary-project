import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  console.log(props);

  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h6 style={{ color: "#374151" }}>{props.results.phonetic}</h6>{" "}
          {/*SelfNote: Move style later to CSS file.  */}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
