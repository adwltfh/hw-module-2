const LoginButton = ({AUTHORIZE_URL, CLIENT_ID, REDIRECT_URI, SCOPE}) => {
    return (
        <a href={`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPE}`}>
            <button className="login-btn">Login</button>
        </a>
    )
}

export default LoginButton;