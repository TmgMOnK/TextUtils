import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " );
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert("Converted to uppercase!!","success");
  } 

  const handleLoClick = ()=>{
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert("Converted to lowercase!!","success");
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!!","success");
  }

  const handleOnChange = (event)=>{
    // console.log("Handle on change invoked.");
    setText(event.target.value);
  }

  const handleCopy= ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!!","success");
  }

  const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!!","success");

  }

  const [text, setText] = useState("")
  //text = "Text changed.";//wrong way to change text
  //setText = ("Text changed."); //Correct way to change text
  return (
    <>
      <div className="container my-3" id='box' style={{color:props.mode==='dark'?'white':'#042743'}}> 
        <div className="container my-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} id="myBox" rows="12" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} expected minutes to read this.</p>
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
      </div>
    </>
  )
}

