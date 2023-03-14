import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import PropTypes from 'prop-types';

import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("lightr mode has been enabled", "success");
    }
  }


  return (
    <>


      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container" my-3>

        


        <Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />




      </div>






    </>

  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'set title here',
  
};
export default App;

