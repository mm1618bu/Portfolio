import React from 'react';
import '../App.css';
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>TableEase</h1>
            </div>
            <div className='navlinks'>
                <a href='#'>Home</a>
                <a href='#'>Product</a>
                <a href='#'>Sales</a>
                <button>Contact</button>
            </div>
        </div>
    );
}