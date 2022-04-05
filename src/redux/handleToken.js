import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "./token";
import LoginButton from "../components/navbar/login";
import AppNavBar from "../components/navbar";
import SearchBarComponent from "../components/navbar/search";

const TokenGetter = ({handleSearch, handleSearchValue, query}) => {
    const auth_env = {
        BASE_URL: 'https://api.spotify.com/v1/',
        CLIENT_ID: '5d5464f1b0004da2b17d88e18884af58',
        AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
        REDIRECT_URI: 'http://localhost:3000/callback/',
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
        <AppNavBar>
            {
                token && 
                <SearchBarComponent 
                        query={query}
                        handleSearch={handleSearch}
                        handleSearchValue={handleSearchValue}
                        handleLogout={handleLogout}
                />
            }
            {
                !token &&
                <LoginButton {...auth_env} />
            }
        </AppNavBar>
    );
}

export default TokenGetter;