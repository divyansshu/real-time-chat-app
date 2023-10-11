export default function LoginPage() {
    return (
        <div className="container">
            <div className="title">
                <h1>Chat App</h1>
                <p>chat with your friends in real time</p>
            </div>

            <div className="register">
                <form className="form" action="">
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
                <a href="#">Forgot Password?</a>
                <button className="login">Create a New Account</button>  
            </div>
        </div>
    );
}
