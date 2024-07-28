// src/App.js
import React from 'react';
import Queue from './Queue';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Appointment Simulator</h1>
      <Queue />
    </div>
  );
};

export default App;
