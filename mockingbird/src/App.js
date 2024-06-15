// App.jsx
import React from 'react';
import Salad from './salad';
import Mockingbird from './mockingbird';
import Game from './Game';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Build Your Salad</h1>
      <Salad />
      <Mockingbird />
      <Game />
    </div>
  );
};

export default App;
