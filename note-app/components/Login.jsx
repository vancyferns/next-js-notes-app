export default function Login()
{
    return (
        <>
        <div className="login-container">
            <h1 className="text-gradient">
                Notsify
            </h1>
            <h2>organized note-making made easy</h2>
            <p>Build Your Very Own Archive of Easily Navigated and Indexed Information and Notes</p>
            <div className="full-line"></div>
            <h6>Sign in</h6>
            <div>
                <p>Email</p>
                <input type="text" placeholder="email"/>
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="password"/>
            </div>
            <button id='submit-btn' className="card-button-primary">
                <h6>
                    Submit
                </h6>
            </button>
            <div className="secondary-btns-container">
                <button className="card-button-secondary">
                    <small>Log in</small>
                </button>
                <button className="card-button-secondary">
                    <small>Forgot Password ?</small>
                </button>
            </div>
            <div className="full-line"></div>
            <footer>
                <a target="_blank" href="https:github.com/vancyferns/next-js-notes-app">
                <img alt="pfp" src="https://avatars.githubusercontent.com/u/135420254?s=400&u=68401c88576476d8a2e61e931f0f3736f6fb443d&v=4"/>
                </a>
                <h6>@vancyferns</h6>
                <i className="fa-brands fa-github"></i>
            </footer>
        </div>

        </>

    );
}