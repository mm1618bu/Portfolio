import React from 'react';
import '../App.css';

export default function Register() {
    return (
        <div className='page'>
            <div className='banner'>

            </div>
            <div className='portal'>
                <h1>Register</h1>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"></input>
                    <br></br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email"></input>
                    <br></br>
                    <button type="submit" value="Register">Sign Me Up!</button>
                </form>
            </div>
        </div>
    );
}