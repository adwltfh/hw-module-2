const LoginButton = () => {
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    return (
        <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=playlist-modify-private`}>
            <button className="login-btn">Login</button>
        </a>
    );
};

export default LoginButton;