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
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="App">
      <Sidebar className="Sidebar"/>
      <div className="Content">
        <Navbar />
        <Homepage />
        <Login />
        <Register />
        <Logout />
        <PageNotFound />
        <ForgotPassword />
        <AdminDashboard />
      </div>
    </div>
  );
}