import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted into Uppercase.", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space has been removed", "success");
  };
  const handleReClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text has been reversed", "success");
  };
  const handleLowClick = () => {
    // console.log("UpperCase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted into LowerCase.", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(40 39 39)",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleReClick}
          disabled={text.length === 0}
        >
          Reverse a String
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split("").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes taken
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
