import React, { useState } from 'react';
import './RandomNumberGenerator.css';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomWord = () => {
  // Add your logic to fetch random words (e.g., from an API or predefined list)
  const words = [
    'Apple', 'Banana', 'Orange', 'Car', 'House', 'Tree', 'Dog', 'Cat', 'Elephant', 'Sun', 'Moon', 'Star',
    'River', 'Ocean', 'Mountain', 'Computer', 'Keyboard', 'Mouse', 'Phone', 'Book', 'Pen', 'Paper', 'Music',
    'Guitar', 'Piano', 'Coffee', 'Tea', 'Cake', 'Chocolate', 'Flower', 'Garden', 'Friend', 'Family', 'Love',
    'Laughter', 'Smile', 'Rain', 'Snow', 'Cloud', 'Wind', 'Fire', 'Earth', 'Sky', 'Door', 'Window', 'Mirror',
    'Key', 'Lock', 'Shoe', 'Hat', 'Shirt', 'Pants', 'Socks', 'Glasses', 'Watch', 'Wallet', 'Money', 'Bag',
    'Chair', 'Table', 'Lamp', 'Candle', 'Painting', 'Camera', 'Photo', 'Sunrise', 'Sunset', 'Beach', 'Sand',
    'Shell', 'Boat', 'Plane', 'Train', 'Bus', 'Carrot', 'Broccoli', 'Pizza', 'Burger', 'Ice Cream', 'Cookie',
    'Smile', 'Laugh', 'Cry', 'Dream', 'Hope', 'Wish', 'Play', 'Learn', 'Explore', 'Create', 'Travel', 'Discover',
    'Write', 'Read', 'Sing', 'Dance', 'Exercise', 'Meditate', 'Sleep', 'Awake', 'Breathe', 'Reflect', 'Grow',
    'Imagine', 'Achieve', 'Inspire', 'Change', 'Challenge', 'Accept', 'Forgive', 'Understand', 'Listen', 'Speak',
    'Observe', 'Appreciate', 'Thank', 'Celebrate', 'Shine', 'Star', 'Moonlight', 'Crystal', 'Wisdom', 'Harmony',
    'Whisper', 'Serenity', 'Tranquil', 'Journey', 'Grace', 'Eternity'
  ];
  
  
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

const generatePassphrase = () => {
  const word1 = generateRandomWord();
  const word2 = generateRandomWord();
  const word3 = generateRandomWord();
  const number = generateRandomNumber(0, 9);
  const specialCharacters = '!@#$%^&*()_-+={}[]|:;"<>,.?/';
  const specialCharIndex = generateRandomNumber(0, specialCharacters.length - 1);
  const specialChar = specialCharacters[specialCharIndex];

  return `${word1}${specialChar}${word2}${specialChar}${word3}${number}`;
};

const RandomNumberGenerator = () => {
  const [passphrase, setPassphrase] = useState('');

  const handleGeneratePassphrase = () => {
    const newPassphrase = generatePassphrase();
    setPassphrase(newPassphrase);
  };

  return (
    <div>
      <h1>Passphrase Generator</h1>
      <button onClick={handleGeneratePassphrase}>Generate Passphrase</button>
      <br />
      {passphrase && (
        <div>
          <h2>Passphrase:</h2>
          <p>{passphrase}</p>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
