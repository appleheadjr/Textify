import React,{useState} from 'react'


export default function Text(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClearClick = ()=>{
    setText('');
    props.showAlert("Text Cleared","success");

  }
  const handleOnChange = (event)=>{
    console.log("Onchange");
    setText(event.target.value); //for adding our choice of text in the textbox
  }

  const [text,setText] = useState('');
  return (
    <>
    <div className='container mb-3' style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-5">
          <h2>{props.heading}</h2>
        
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='light'?'#F1E4C3':'#11235A', color:props.mode==='light'?'black':'white'}} 
        rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>

    </div>
    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your paragraph summary</h2>
      <p>your text contains {text.length} characters and {text.split(" ").length} words</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text.length > 0?text:"Enter your text"}</p>
    </div>
    
    </>
  )
}
