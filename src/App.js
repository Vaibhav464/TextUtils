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
  // const [redCol, setRedCol] = useState('red');
  // const [greenCol, setGreenCol] = useState('green');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // const [showText, setShowText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode ('dark')
      document.body.style.backgroundColor='#282828';
      // showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
    } 
    else {
      setMode ('light')
      document.body.style.backgroundColor='white'
      // showAlert("Light mode has been enabled", "success")
    }
  }

  const darkColor =()=>{
    if(mode === "Red"||"Green"){
      setMode('dark')
      document.body.style.backgroundColor='#282828';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  const blueColor =()=>{
    if(mode === "dark"||"Green"){
      setMode('dark')
      document.body.style.backgroundColor='#0B1340';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }

  const greenColor=()=>{
    if(mode === "dark"||"blue"){
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
          {/* <Route exact path="/about" element={<About />}> */}
          {/* </Route> */}
          {/* <Route path="/home" element={ */}
          <TextForm heading = "Enter the text to convert and analyze below" mode ={mode} blueColor={blueColor} greenColor={greenColor} toggleMode={toggleMode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Routes> */}
  </div>
  {/* </BrowserRouter> */}
    </>
  );
}

export default App;
