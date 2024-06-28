import '../App.css';

export default function Login() {
    return (
        <div className='loginpage'>
        <div className='loginbanner'>

        </div>
        <div className='loginportal'>
            <h1>Login</h1>
            <form>
                <div className='inlabel'>
                <input type="text" id="username" name="username" placeholder='Enter Username'></input>
                </div>
                <br></br>
                <div className='inlabel'>
                <input type="password" id="password" name="password" placeholder='Enter Password'></input>
                <br></br>
                </div>
                <button type="submit" value="Login">Login</button>
                <br></br>
                <a href="null">Forgot password?</a>
                <a href="null">First Time user</a>
            </form>
        </div>
        </div>
    );
}