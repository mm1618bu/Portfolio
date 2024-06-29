import React from 'react';
import '../App.css';
import DiningRoomImage from '../assets/images/diningroom.png';

const Homepage = () => {
    return (
        <div className="homepage">
            <img src={DiningRoomImage} alt="Dining Room" className="homepage-image"/> {/* Use an img tag with the imported image */}
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
