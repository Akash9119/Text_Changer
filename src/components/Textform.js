import React, { useState } from 'react';



function Textform(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text convered to UpperCase", "success" );
    }

    const handleLowClick = () =>{
        let LowText = text.toLowerCase();
        setText(LowText);
        props.showAlert("Text convered to LowerCase", "success" );
    }


      const handleReverse = (event) => {
        let strArr = text.split("");
        strArr = strArr.reverse();
        let revText = strArr.join("");
        setText(revText);
        props.showAlert("Text has been reversed", "success");
      };

      const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
            }
        })
        setText(joinedWords);
        props.showAlert("Extra spaces has been removed", "success");
    }
    
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clip-Board!", "success");
  }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{
        props.title}</h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor: props.mode==='dark'?'#21384f':'white', color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleReverse} >Reverse Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your Text summary</h2>
            <h5>Entered data has {text.split(/\s+/).filter((element) => {return element.length !==0}).length} words and {text.length} Characters</h5>
            <h5>Entered data will take {0.008 * text.split(/\s+/).filter((element) => {return element.length !==0}).length} Minutes to read</h5>
            <h2>Preview Text</h2>
            <p><strong>{text.length>0?text:"Enter something to preview it hear"}</strong></p>
        </div>
    </>
  )
}

export default Textform
