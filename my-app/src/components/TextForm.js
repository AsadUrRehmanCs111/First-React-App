import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper Case Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowClick = () =>{
        // console.log("Upper Case Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const  handleOnChange= (event) =>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{ color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style= {{ backgroundColor: props.mode ==='dark'?'#042743':'white', color: props.mode ==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to LowerCase</button>
        </div>
        <div className="my-3"  style={{ color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length-1} No of words and {text.length} charaters</p>
            <h1>Text Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
}
