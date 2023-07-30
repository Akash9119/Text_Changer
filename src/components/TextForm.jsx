import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        var newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        var newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        setText('');
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="textChange" rows="12" onChange={e => setText(e.target.value)}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(' ').length -1} Words and {text.length} Characters.
                    <br />
                    Will Require {0.008 * (text.split(' ').length)} Minutes to Read.
                </p>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm;
