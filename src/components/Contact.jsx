import React from 'react'

function Contact({ mode }) {
  const isDark = mode === 'dark';

  return (
    <div
      className="contact"
      style={{
        backgroundColor: isDark ? 'rgba(26, 26, 46, 1)' : '#f0f4f8',
        color: isDark ? '#e0e0e0' : '#0a0e27',
        minHeight: '80vh',
        padding: '3rem 1.5rem',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Get In Touch
        </h1>
        
        <div 
          style={{
            padding: '2rem',
            borderRadius: '12px',
            backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.95)',
            border: `2px solid ${isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}`,
            marginBottom: '2rem'
          }}
        >
          <h3 
            style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: isDark ? '#7c3aed' : '#7c3aed'
            }}
          >
            📧 Email
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '0' }}>
            <strong>akashj.vasava@gmail.com</strong>
          </p>
        </div>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Feel free to reach out to me on the following platforms:
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div 
            style={{
              padding: '1.5rem',
              borderRadius: '12px',
              backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.95)',
              border: `2px solid ${isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}`
            }}
          >
            <h4 style={{ marginBottom: '0.5rem', color: isDark ? '#7c3aed' : '#7c3aed' }}>💼 LinkedIn</h4>
        <a
          href="https://www.linkedin.com/in/akash-vasava/"
          style={{
            textDecoration: "none",
            color: "#00d4ff",
            fontWeight: "bold",
            marginLeft: "0.5rem",
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.7'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/akash-vasava/
        </a>
        </div>

        <div 
          style={{
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.95)',
            border: `2px solid ${isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}`
          }}
        >
          <h4 style={{ marginBottom: '0.5rem', color: isDark ? '#7c3aed' : '#7c3aed' }}>💻 GitHub</h4>
        <a
          href="https://github.com/Akash9119"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#00d4ff",
            fontWeight: "bold",
            marginLeft: "0.5rem",
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.7'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
          rel="noopener noreferrer"
        >
          https://github.com/Akash9119
        </a>
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            marginTop: '2rem',
            padding: '1.5rem',
            borderRadius: '8px',
            backgroundColor: isDark ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.05)',
            borderLeft: '4px solid #7c3aed'
          }}
        >
          Whether you have questions, feedback, collaboration ideas, or just want to connect, I'd love to hear from you! 🙌
        </p>
        </div>
      </div>
      </div>
  )
}

export default Contact;
