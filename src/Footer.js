import React from "react";
import "./Footer.css";

/* Footer */

export default function Footer() {
  return (
    <div className="Footer">
      <span>Coded by </span> <span className="coder">Annelize Grobbelaar</span>{" "}
      |
      <a
        href="https://www.linkedin.com/in/annelize-grobbelaar-1ba524151/"
        title="LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/annelizeg/dictionary-project"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>
    </div>
  );
}
