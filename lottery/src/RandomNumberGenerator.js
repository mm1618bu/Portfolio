import React, { useState } from 'react';
import './RandomNumberGenerator.css';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomSet = (length, pattern) => {
  let randomSet = [];
  const symbols = '!@#$%^&*()_-+={}[]|:;"<>,.?/';

  for (let i = 0; i < length; i++) {
    switch (pattern) {
      case 'numeric':
        randomSet.push(generateRandomNumber(0, 9));
        break;
      case 'alphabetical':
        const isUpperCase = Math.random() < 0.5;
        const charCode = isUpperCase
          ? generateRandomNumber(65, 90)
          : generateRandomNumber(97, 122);
        randomSet.push(String.fromCharCode(charCode));
        break;
      case 'alphanumeric':
        const isNumeric = Math.random() < 0.5;
        if (isNumeric) {
          randomSet.push(generateRandomNumber(0, 9));
        } else {
          const isUpperCase = Math.random() < 0.5;
          const charCode = isUpperCase
            ? generateRandomNumber(65, 90)
            : generateRandomNumber(97, 122);
          randomSet.push(String.fromCharCode(charCode));
        }
        break;
      case 'symbols':
        const symbolIndex = generateRandomNumber(0, symbols.length - 1);
        randomSet.push(symbols[symbolIndex]);
        break;
      default:
        break;
    }
  }
  return randomSet;
};

const RandomNumberGenerator = () => {
  const [length, setLength] = useState(6);
  const [pattern, setPattern] = useState('numeric');
  const [randomSet, setRandomSet] = useState([]);

  const handleGenerateRandomSet = () => {
    const newRandomSet = generateRandomSet(length, pattern);
    setRandomSet(newRandomSet);
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <label>
        Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <br />
      <label>
        Pattern:
        <select value={pattern} onChange={(e) => setPattern(e.target.value)}>
          <option value="numeric">Numeric</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="alphanumeric">Alphanumeric</option>
          <option value="symbols">Symbols</option>
        </select>
      </label>
      <br />
      <button onClick={handleGenerateRandomSet}>Generate Random Set</button>
      <br />
      {randomSet.length > 0 && (
        <div>
          <h2>Random Set:</h2>
          <p>{randomSet.join('')}</p>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
