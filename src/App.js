// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alerts';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor='#282828';
    } 
    else {
      setMode ('light')
      document.body.style.backgroundColor='white'
    }
  }

  const darkColor =()=>{
    if(mode === 'dark'){
      setMode('dark')
      document.body.style.backgroundColor='#282828';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  const blueColor =()=>{
    if(mode === 'dark'){
      setMode('dark')
      document.body.style.backgroundColor='#0B1340';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }

  const greenColor=()=>{
    if(mode === 'dark'){
      setMode('dark')
      document.body.style.backgroundColor='#182c25';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
  {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
  {/* <Navbar /> */}
  {/* <BrowserRouter> */}
  <Navbar title = "TextUtils" mode ={mode} darkColor={darkColor} blueColor={blueColor} greenColor={greenColor} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode}/>}> */}
          {/* </Route> */}
          {/* <Route path="/home" element={ */}
          <TextForm heading = "Convert your text to Uppercase/Lowercase" mode ={mode} blueColor={blueColor} greenColor={greenColor} toggleMode={toggleMode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Routes> */}
  </div>
  {/* </BrowserRouter> */}
    </>
  );
}

export default App;
