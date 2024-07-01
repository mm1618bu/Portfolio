import React from 'react';
import '../App.css';
import DiningRoomImage from '../assets/images/diningroom.png';

export default function Register() {
    return (
        <div className='page'>
            <div className='banner'>
            <img src={DiningRoomImage} alt="Dining Room" className="homepage-image"/>
            </div>
            <div className='portal'>
                <h1>Register</h1>
                <form>
                    <div className='inlabel'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder='Enter Username'></input>
                    </div>
                    <div className='inlabel'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder='Enter Password'></input>
                    </div>
                    <div className='inlabel'>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder='Enter Email'></input>
                    </div>
                    <button type="submit" value="Register">Sign Me Up!</button>
                </form>
            </div>
        </div>
    );
}
