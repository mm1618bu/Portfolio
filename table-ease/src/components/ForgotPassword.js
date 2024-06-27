import React from 'react';
import React, { useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement the logic to send a password reset email to the user's email address
        console.log('Forgot password form submitted');
        console.log('Email:', email);
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}
