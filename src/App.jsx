import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx'
import Alerts from './components/Alerts.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Switch to Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleSwitch = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeText('Switch to Light Mode')
      document.body.style.backgroundColor = '#69696e'
      showAlert("Dark mode enabled!", "success")
    } else {
      setMode('light')
      setModeText('Switch to Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled!", "success")
    }
  }

  return (
    <BrowserRouter>
      <Navbar title={"Text Changer"} mode={mode} modeText={modeText} toggleSwitch={toggleSwitch} />
      <Alerts alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm heading={"Enter Text To Analyze"} mode={mode} showAlert={showAlert} />} />
        <Route path='about' element={<About mode={mode} />} />
        <Route path='contact' element={<Contact mode={mode} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
