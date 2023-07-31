import React from 'react';

function About(props) {
  return (
    <div className='mx-3' style={{backgroundColor: props.mode === 'dark'? '#69696e': 'white', color: props.mode ==='dark'?'white':'black'}}>
      <h2 className="mb-4">About Text Changer</h2>
      <p>
        Text Changer is a simple utility website that allows you to manipulate and modify text in various ways. Whether you need to convert text case, remove duplicates, add prefixes or suffixes, or perform other text transformations, Text Changer has got you covered.
      </p>
      <p>
        Our mission is to make text manipulation easy and accessible to everyone. The user-friendly interface ensures that you can quickly apply changes to your text without any hassle.
      </p>
      <h3 className="mb-3">Key Features:</h3>
      <ul>
        <li>Text Case Conversion: Easily change the text to uppercase, lowercase, title case, or sentence case.</li>
        <li>Remove Duplicates: Eliminate duplicate words or characters from your text.</li>
        <li>Add Prefixes/Suffixes: Append or prepend text to your content for quick modifications.</li>
        <li>Character Count: Find out the total number of characters, words, and lines in your text.</li>
        <li>And more: Stay tuned for future updates as we add new features regularly.</li>
      </ul>
      <p>
        We are committed to enhancing Text Changer based on user feedback and needs. If you have any suggestions or encounter any issues while using the website, feel free to get in touch with us.
      </p>
      <p>
        Thank you for using Text Changer! We hope it simplifies your text manipulation tasks and saves you time.
      </p>
    </div>
  );
}

export default About;
