import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "./token";
import LoginButton from "../components/navbar/login";
import AppNavBar from "../components/navbar";
import SearchBarComponent from "../components/navbar/search";
import LoginPage from "../pages/Login";

const TokenGetter = ({handleSearch, handleSearchValue, query}) => {
    const auth_env = {
        BASE_URL: process.env.REACT_APP_SPOTIFY_BASE_URL,
        CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        AUTHORIZE_URL: process.env.REACT_APP_SPOTIFY_AUTHORIZE_LINK,
        REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI,
        SCOPE: 'playlist-modify-private',
    }

    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');
        if(!token && hash) {
            token = hash.substring(1).split('&').find(
                (e) => e.startsWith('access_token')
            ).split('=')[1];
            window.location.hash = ''
            window.localStorage.setItem('token', token)
        }
        setToken(token)
        dispatch(getToken(token))
    }, [dispatch]);

    const handleLogout = () => {
        setToken('')
        dispatch(getToken(''))
        window.localStorage.removeItem('token')
    }

    return (
        // <AppNavBar>
        //         <SearchBarComponent 
        //             query={query}
        //             handleSearch={handleSearch}
        //             handleSearchValue={handleSearchValue}
        //             handleLogout={handleLogout}
        //         />
        // </AppNavBar>
        <LoginPage/>
    );
}

export default TokenGetter;