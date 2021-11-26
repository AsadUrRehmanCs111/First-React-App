import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark Mode Enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Enabled', 'success');
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="AR Test" mode = {mode} toggleMode ={toggleMode}/>
      <Alert alert={alert} showAlert={showAlert} />
      <Routes>
        <Route path="/" element={<div className="container"> <TextForm heading="Enter text to analyze Below" mode={mode} /></div> } />
        <Route path="/aboutUs" element={<AboutUs /> } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
