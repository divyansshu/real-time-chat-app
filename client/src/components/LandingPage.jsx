export default function LandingPage() {
    return (
        <div className="container">
            <div className="title">
                <h1>Chat App</h1>
                <p>chat with your friends in real time</p>
            </div>

            <div className="register">
                <form className="form" action="">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <input type="text" placeholder="Password Again"/>
                    <button type="submit" className="signup">Sign Up</button>
                </form>
                <button className="login">Login into Account</button>  
            </div>
        </div>
    );
}
