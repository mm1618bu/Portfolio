import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import the correct routing components
import TabsLayout from './_layout'; // Adjust the import path as necessary

export default function App() {
  return (
    <Router> {/* Use 'Router' instead of 'router' */}
      <Route path="/" element={<TabsLayout />} /> {/* Use 'Route' instead of 'router' */}
      {/* Define other routes here */}
    </Router>
  );
}