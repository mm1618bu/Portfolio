// src/App.js
import React from 'react';
import CallForm from './CallForm';
import './App.css';
import InformationForm from './InformationForm';

function App() {
  return (
    <div className="App">
      <h1>Call Quality Assurance Form</h1>
      <InformationForm />
      <CallForm />
    </div>
  );
}

export default App;
