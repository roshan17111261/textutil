import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick =()=>{
    console.log("uppercase was clicked" + text);
    let Newtext = text.toUpperCase();
    setText(Newtext);
    props.showAlert("Converted to uppercase!", "success");

  }
  const handleLoClick =()=>{
    console.log("uppercase was clicked" + text);
    let Newtext = text.toLowerCase();
    setText(Newtext);
    props.showAlert("Converted to lowercase!", "success");

  }
  const handleClearClick =()=>{
    console.log("uppercase was clicked" + text);
    let Newtext = " ";
    setText(Newtext);
    props.showAlert("Clear text!", "success");

  }
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text!", "success");
  }
  const handleOnchange =(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text ,setText] = useState();
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control" value={text} onChange = {handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="10"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick = {handleUpClick}>convert to uppercase</button>
  <button className="btn btn-primary mx-1" onClick = {handleLoClick}>convert to lowercase</button>
  <button className="btn btn-primary mx-1" onClick = {handleClearClick}>clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>copy text</button>

  


  </div>
  <div className="container my-3">
   

  </div>
  </>
  )
}
