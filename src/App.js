import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Wellcome from './Components/Wellcome';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Wellcome></Wellcome>
      <Hello></Hello>
    </div>
  );
  
}

export default App;
