import React from 'react';

export default function Register() {
    return (
        <div className='registerpage'>
            <div className='registerbanner'>

            </div>
            <div className='registerportal'>
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
                    <button type="submit" value="Register"></button>
                </form>
            </div>
        </div>
    );
}