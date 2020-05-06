import React from 'react';
import logo from './logo.svg';
import Container from './container/container'
import Sidemenu from './sidemenu/sidemenu'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex wrapper">
        <Sidemenu/>
        <Container/>
      </div>
    </div>
  );
}

export default App;
