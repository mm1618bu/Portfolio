import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Sidebar from './components/Sidebar';
import Logout from './components/Logout';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Navbar />
      <Sidebar />
      <Logout />
      <PageNotFound />
      <ForgotPassword />
    </div>
  );
}

export default App;