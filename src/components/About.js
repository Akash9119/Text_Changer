import React from 'react'

function About(props) {

  let myStyle = {
    color: props.mode==='light'?'black':'white',
    backgroundColor: props.mode==='dark'?'#00203c':'white'
  }

  return (
    <>
    <div className="container" style={myStyle}>
    <h1 className="my-3">{props.title}</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Text-Changer</strong> gives you a way to analyze your text quickly and effectively, it will also give you the word and character count of the text you type or enter.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Text-Changer</strong> is a free to use web application.It is a free character counter tool which also provides instant character count and word count statastics for a given text. Text-Changer reports the number of words and characters.Thus it is sutable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, Edge, Brave. It suits to count characters in facebook, blog, book, excel documnet, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default About
