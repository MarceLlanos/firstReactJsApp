import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Wellcome from './Components/Wellcome';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Wellcome></Wellcome>
    </div>
  );
}

export default App;
