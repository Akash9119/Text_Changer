import React from 'react';

function About(props) {
  const isDark = props.mode === 'dark';

  return (
    <div 
      className='about-container'
      style={{
        backgroundColor: isDark ? 'rgba(26, 26, 46, 1)' : '#f0f4f8',
        color: isDark ? '#e0e0e0' : '#0a0e27',
        minHeight: '90vh',
        padding: '3rem 1.5rem',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 
          style={{
            marginBottom: '1.5rem',
            fontSize: '2rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          About Text Changer
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          Text Changer is a powerful and intuitive utility application that enables you to transform and manipulate text in countless ways. Whether you need to convert text cases, rearrange content, encode/decode, apply aesthetic effects, or perform advanced text formatting, Text Changer provides comprehensive tools at your fingertips.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          Our mission is to make text manipulation easy, fast, and accessible to everyone. With our modern and user-friendly interface, you can quickly apply transformations without any complexity or hassle.
        </p>
        
        <h3 
          style={{
            marginBottom: '1rem',
            marginTop: '2rem',
            fontSize: '1.5rem',
            fontWeight: '600',
            color: isDark ? '#7c3aed' : '#7c3aed'
          }}
        >
          ✨ Key Features:
        </h3>
        <ul 
          style={{
            fontSize: '1.05rem',
            lineHeight: '2',
            marginLeft: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <li>🔤 <strong>Case Conversions:</strong> Convert text to UPPERCASE, lowercase, Title Case, Sentence Case, Toggle, or Random Case.</li>
          <li>🔄 <strong>Text Rearrangement:</strong> Reverse text, reverse words, reverse lines, and sort lines alphabetically.</li>
          <li>✂️ <strong>Text Formatting:</strong> Trim spaces, remove extra whitespace, clean punctuation, remove digits, and more.</li>
          <li>🔐 <strong>Encoding & Security:</strong> Base64, URL, HTML encoding/decoding, ROT13 cipher, and more.</li>
          <li>💻 <strong>Code Formatting:</strong> Convert to camelCase, snake_case, kebab-case, slugify, and JSON formatting.</li>
          <li>🎨 <strong>Aesthetic Effects:</strong> Apply Unicode fonts (Bold, Italic, Monospace), Zalgo effects, and more.</li>
          <li>📊 <strong>Real-time Statistics:</strong> Live word count, character count, line count, reading time, and more.</li>
          <li>🌙 <strong>Dark & Light Mode:</strong> Fully optimized themes with beautiful gradients and smooth transitions.</li>
        </ul>

        <h3 
          style={{
            marginBottom: '1rem',
            marginTop: '2rem',
            fontSize: '1.5rem',
            fontWeight: '600',
            color: isDark ? '#7c3aed' : '#7c3aed'
          }}
        >
          🎯 Why Choose Text Changer?
        </h3>
        <ul 
          style={{
            fontSize: '1.05rem',
            lineHeight: '2',
            marginLeft: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <li>✅ Fast and responsive performance</li>
          <li>✅ Intuitive tabbed interface for easy navigation</li>
          <li>✅ 40+ powerful text transformation tools</li>
          <li>✅ Copy, download, and clear functionality</li>
          <li>✅ Beautiful modern design with smooth animations</li>
          <li>✅ Mobile-friendly and fully responsive</li>
        </ul>
        <p 
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            marginTop: '2rem',
            padding: '1.5rem',
            borderRadius: '8px',
            backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.9)',
            border: `2px solid ${isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}`
          }}
        >
          We are continuously enhancing Text Changer based on user feedback and emerging needs. If you have suggestions or encounter any issues, feel free to reach out to us. Your feedback helps us improve!
        </p>
        
        <p 
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            marginTop: '1rem',
            fontStyle: 'italic',
            opacity: 0.8
          }}
        >
          Thank you for using Text Changer! We hope it transforms your text manipulation experience and saves you valuable time.
        </p>
      </div>
    </div>
  );
}

export default About;
