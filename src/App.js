import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const changeMode = ()=>{
    if( mode === 'light') { 
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light') 
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <Router>   
      <Navbar title="TextUtils" aboutText="About Us" changeMode={changeMode} mode={mode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/" element={<TextForms heading="Enter the text to analyze below" mode={mode} />}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
