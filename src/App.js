
import React,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const [navbarGreen,setNavbarGreen] = useState('light'); //for navbar color
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#11235A'; //blue
      showAlert("Dark mode has been enabled","success");
      document.title = 'Enabled dark Mode'; //changing the title (in the bar above)
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Enabled Light Mode';


    }
  }

  const greenMode=()=>{
    if(navbarGreen==='light')
    {
      setNavbarGreen('green');
      document.body.style.backgroundColor = '#AAD9BB'; //green
      showAlert("Green mode has been enabled","success");
    }
    else
    {
      setNavbarGreen('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
  }
  return (
  <>  
      
      <Navbar title="textutils" mode={mode} navbarGreen={navbarGreen} toggleMode={toggleMode} greenMode={greenMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Text heading="Enter your text here" mode={mode} navbarGreen={navbarGreen} showAlert={showAlert}/>
      </div>
      </>
  );
}

export default App;
