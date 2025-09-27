import React from "react";
import "./Footer.css";

/* Footer */

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <span>Coded by </span>{" "}
        <span className="coder">Annelize Grobbelaar</span> |
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
      <div>Definitions from SheCodes Dictionary API 💜</div>
      <div>
        Photos provided by{" "}
        <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
          <img
            src="https://images.pexels.com/lib/api/pexels-white.png"
            alt=""
            width="50em"
          />
        </a>
      </div>
    </div>
  );
}
