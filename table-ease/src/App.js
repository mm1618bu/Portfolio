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
import DiningRoomImage from './assets/images/diningroom.png';
import SVGComponent from './components/SVGComponent';
import ContainerComponent from './components/ContainerComponent';

export default function App() {
  return (
    <div className="App">
      <Sidebar className="Sidebar"/>
      <img src={DiningRoomImage} alt="Dining Room" className="homepage-image"/> 
      <div className="Content">
        <Homepage />
        <Login />
        <Register />
        <Logout />
        <PageNotFound />
        <ForgotPassword />
        <AdminDashboard />
        <SVGComponent />
        <ContainerComponent />
      </div>
    </div>
  );
}