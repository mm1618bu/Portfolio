// App.js
import React from 'react';
import CallCenter from './CallCenter';
import Clocks from './Clocks';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Clocks />
      <CallCenter />
    </div>
  );
}

export default App;
