import '../App.css';

export default function Login() {
    return (
        <div className='loginpage'>
        <div className='loginbanner'>

        </div>
        <div className='loginportal'>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"></input>
                <br></br>
                <button type="submit" value="Login"></button>
            </form>
        </div>
        </div>
    );
}