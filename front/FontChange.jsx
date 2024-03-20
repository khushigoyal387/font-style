import React, { useState } from "react";
import "./FontChange.css";

function FontChange() {
  const [text, setText] = useState("");
  const [change, setChange] = useState([]);

  function submit(e) {
    setText(e.target.value);
  }

  function handle(e) {
    e.preventDefault();

    if (e.target.id === "one") {
      if (change.includes("upperCase")) {
        setChange(change.filter((item) => item !== "upperCase"));
      } else {
        setChange([...change, "upperCase"]);
      }
    } else if (e.target.id === "two") {
      if (change.includes("lowerCase")) {
        setChange(change.filter((item) => item !== "lowerCase"));
        console.log(change);
      } else {
        setChange([...change, "lowerCase"]);
        console.log(change);
      }
    } else if (e.target.id === "three") {
      if (change.includes("italic")) {
        setChange(change.filter((item) => item !== "italic"));
      } else {
        setChange([...change, "italic"]);
      }
    } else if (e.target.id === "four") {
      if (change.includes("bold")) {
        setChange(change.filter((item) => item !== "bold"));
      } else {
        setChange([...change, "bold"]);
      }
    }
  }

  return (
    <>
      <div className="font-style">
        <div className="type">
          <textarea
            className={change.length > 0 ? change.join(" ") : ""}
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="type..."
            onChange={submit}
          >
            {text}
          </textarea>

        </div>
        <div className="btns">
          <div>
            <button id="one" onClick={handle}>
              toUpperCase
            </button>
            <button id="three" onClick={handle}>
              Italic
            </button>
          </div>
          <div>
            <button id="two" onClick={handle}>
              toLowerCase
            </button>
            <button id="four" onClick={handle}>
              Bold
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FontChange;
