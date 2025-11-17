import React from 'react'

function Contact({ mode }) {
  return (
    <div
      className="contact"
      style={{
        backgroundColor: mode === 'dark' ? '#69696e' : 'white',
        color: mode === 'dark' ? 'white' : 'black',
        minHeight: '80vh',
        padding: '2rem'
      }}
    >
      <h1>Contact Us</h1>
      <p>You can contact us at the Email: <strong>akashj.vasava@gmail.com</strong></p>
      <p>
        To connect with me on LinkedIn:
        <a
          href="https://www.linkedin.com/in/akash-vasava/"
          style={{
            textDecoration: "none",
            color: "darkblue",
            fontWeight: "bold",
            marginLeft: "0.5rem"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/akash-vasava/
        </a>
      </p>
      <p>
        To see my GitHub:
        <a
          href="https://github.com/Akash9119"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "darkblue",
            fontWeight: "bold",
            marginLeft: "0.5rem"
          }}
          rel="noopener noreferrer"
        >
          https://github.com/Akash9119
        </a>
      </p>
    </div>
  )
}

export default Contact
