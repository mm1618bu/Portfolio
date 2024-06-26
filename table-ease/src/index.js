import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import
import App from './App'; // Import your main App component

// Use createRoot to manage the root of the React application
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);