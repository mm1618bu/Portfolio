import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Logout from './components/Logout';
import ForgotPassword from './components/ForgotPassword';
import Homepage from './components/Homepage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Login />
      <Register />
      <Navbar />
      <Logout />
      <PageNotFound />
      <ForgotPassword />
      <AdminDashboard />
    </div>
  );
}

export default App;