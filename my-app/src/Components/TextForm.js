import React from 'react'
import {useState} from 'react'
export default function TextForm(props) {
    const [text,setText]=useState("");


    const ToUpCase=()=>{
        let upText=text.toUpperCase();
        setText(upText);
        console.log("soma");
        props.showAlert("Converted to UpperCase","success")

    }
    const clearText=()=>{
        setText("");
        props.showAlert("Text is cleared","success")
    }
    const ToULoCase=()=>{
        let  loText=text.toLowerCase();
        setText(loText);
        props.showAlert("Converted to LowerCase","success")

    }
    const handleOnChange=(event)=>{
        console.log("vamshi");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      var text=document.getElementById('exampleFormControlTextarea1')
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","success")

    }
    const handleSpaces=()=>{
      let newText=text.split(/[' ']+/)
      setText(newText.join(" "));
      props.showAlert("Text extra spaces are removed","success")

    }
  return (
    <>
    <div className='container mt-5' style={{color: props.mode==='light'?'black':'white'}}>
        <h4>Enter text to change</h4>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'light':'white',color: props.mode==='light'?'black':'black'}}id="exampleFormControlTextarea1" rows="8">Enter your text here</textarea>
      </div>
      <button className='btn btn-primary ' onClick={ToUpCase}>To UpperCase</button>
      <button className='btn btn-primary mx-2' onClick={ToULoCase}>To LowerCase</button>
      <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary mx-2' onClick={handleSpaces}>Handle Space</button>
      <h2 className='my-3'>Count</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to preview '}</p>
    </div>
    </>
  )

}
