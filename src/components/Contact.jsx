import React from "react";

function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>You can contact us at the Email:- akashj.vasava@gmail.com</p>
      <p>
        To connect with me on LinkedIn:-
        <a
          href="https://www.linkedin.com/in/akash-vasava/"
          style={{
            textDecoration: "none",
            color: "darkblue",
            fontWeight: "bold",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/akash-vasava/
        </a>
      </p>
      <p>
        To see my GitHub:-
        <a
          href="https://github.com/Akash9119"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "darkblue",
            fontWeight: "bold",
          }}
          rel="noopener noreferrer"
        >
          https://github.com/Akash9119
        </a>
      </p>
    </>
  );
}

export default Contact;
