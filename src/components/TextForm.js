import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleSentClick = () => {
    let arr = text.toLowerCase().split(/[.\s\n]+[\s]/);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(". ");
    setText(newText);
  };
  const handleCapClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };
  // const handleCopy = ()=>{
  //   var text = document.getElementById("myBox");
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = ("new text");
  // setText("new text");
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control border-dark text-${props.mode==='light'?'dark':'light'}`}
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="mx-3 my-2 btn btn-primary" onClick={handleLowerClick}>
          Lowercase
        </button>
        <button disabled={text.length===0} className=" btn btn-primary" onClick={handleSentClick}>
          Sentence Case
        </button>
        <button disabled={text.length===0} className="mx-3 btn btn-primary" onClick={handleCapClick}>
          Capital Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="mx-3 my-2 btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h3>Your text summary</h3>
        <p>
          <b>{text<1?0:text.trim().split(/\s+/).length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        {/* <p><b>{0.008 * text.split(/\s+/).length}</b> Minutes to read</p> */}
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview here.'}</p>
      </div>
    </>
  );
}
