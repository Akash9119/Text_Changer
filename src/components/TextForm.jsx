import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handleLowClick = () => {
        var newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Area has been Cleared!", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("textChange");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to ClipBoard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been Removed!", "success")
    }

    return (
        <>
            <div className="mb-3 mx-5" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
                <textarea className="form-control " value={text} style={{backgroundColor: props.mode === 'dark'? '#69696e': 'white', color: props.mode ==='dark'?'white':'black'}} id="textChange" rows="12" onChange={e => setText(e.target.value)}></textarea>
            </div>
            <div className="mb-3 mx-5" style={{color: props.mode ==='dark'?'white':'black'}}>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-2" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(' ').length -1} Words and {text.length} Characters.
                    <br />
                    Will Require {0.008 * (text.split(' ').length -1)} Minutes to Read.
                </p>
                <p>{text && text.length > 0 ? text : 'Enter text in the above box to Preview it here.'}</p>
            </div>
        </>
    )
}

export default TextForm;
