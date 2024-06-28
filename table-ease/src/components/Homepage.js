import React from 'react';
import '../App.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Welcome to Our Landing Page!</h1>
                <p>This is the homepage of our website.</p>
                <p>Feel free to customize this page with your own content.</p>
            </header>

            <section className="features">
                <h2>Our Features</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Feature 1</td>
                            <td>Feature 1 description goes here. It is an amazing feature that will benefit you greatly.</td>
                        </tr>
                        <tr>
                            <td>Feature 2</td>
                            <td>Feature 2 description goes here. It offers incredible value and convenience.</td>
                        </tr>
                        <tr>
                            <td>Feature 3</td>
                            <td>Feature 3 description goes here. It is designed to improve your experience.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-columns">
                    <div className="team-member">
                        <h3>Team Member 1</h3>
                        <p>Position: CEO</p>
                        <p>Bio: This is a brief bio about Team Member 1. They have extensive experience and lead the team with great expertise.</p>
                    </div>
                    <div className="team-member">
                        <h3>Team Member 2</h3>
                        <p>Position: CTO</p>
                        <p>Bio: This is a brief bio about Team Member 2. They are a technical genius and oversee all tech-related operations.</p>
                    </div>
                    <div className="team-member">
                        <h3>Team Member 3</h3>
                        <p>Position: COO</p>
                        <p>Bio: This is a brief bio about Team Member 3. They ensure that the company's operations run smoothly and efficiently.</p>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Support</td>
                            <td>support@example.com</td>
                            <td>(123) 456-7890</td>
                        </tr>
                        <tr>
                            <td>Sales</td>
                            <td>sales@example.com</td>
                            <td>(123) 456-7891</td>
                        </tr>
                        <tr>
                            <td>General</td>
                            <td>info@example.com</td>
                            <td>(123) 456-7892</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Homepage;
