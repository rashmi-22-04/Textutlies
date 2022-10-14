import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("upper click handleUpClick"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("convert to upper case","success")
  }
  const handleLoClick=()=>{
    console.log("upper click handleLoClick"+text);
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("convert to lower case","success")
  }
  const reverseString=()=> {
    let newtext= text.split("").reverse().join("");
    setText(newtext)
    props.showAlert("reverse string","success")
}


  const handleOnChange=(event)=>{
    console.log("upper click handleOnChange");
    setText(event.target.value)
  }
  
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
      
      <div className="mb-3">
       
        
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode ==='dark'?'grey':'light',color:props.mode ==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={reverseString}>Reverse String</button>
    </div>
    <div className="container my-2" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}  minutes</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
