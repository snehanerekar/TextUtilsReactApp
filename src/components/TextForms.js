import React, {useState} from 'react'

export default function TextForms(props) {
  const [text, setText] = useState("");
  const handleUpperCaseClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleUpperCaseClick}>Convert to Uppercase</button>
      <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-3`} onClick={handleLowerCaseClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <p>{text.trim() === "" ? 0 : 0.008 * text.trim().split(/\s+/).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
