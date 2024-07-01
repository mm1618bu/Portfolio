import '../App.css';
import DiningRoomImage from '../assets/images/diningroom.png';

export default function Login() {
    return (
        <div className='page'>
            <div className='banner'>
            <img src={DiningRoomImage} alt="Dining Room" className="homepage-image"/>
            </div>
            <div className='portal'>
                <h1>Login</h1>
                <form>
                    <div className='inlabel'>
                        <input type="text" id="username" name="username" placeholder='Enter Username'></input>
                    </div>
                    <div className='inlabel'>
                        <input type="password" id="password" name="password" placeholder='Enter Password'></input>
                    </div>
                    <button type="submit" value="Login">Login</button>
                    <br></br>
                    <a href="null">Forgot password?</a><br></br>
                    <a href="null">First Time user</a>
                </form>
            </div>
        </div>
    );
}
