import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchResult } from '../../result-context/searchResult';

const BASE_URL = process.env.REACT_APP_SPOTIFY_BASE_URL;
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const AUTHORIZE_URL = process.env.REACT_APP_SPOTIFY_AUTHORIZE_LINK;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const SCOPE = 'playlist-modify-private';


const SearchBar = () => {
    const [token, setToken] = useState(null);
    const [query, setQuery] = useState('');
    const {result, setResult} = SearchResult();

    const parseToken = (url) => {
        const parsed = url.split('&')[0].split('=');
        const token = parsed[parsed.length-1] ?? null
        setToken(token);
        console.log(token)
    }

    const handleAuthUser = () => {
        window.location.replace(`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`)
    }

    const handleSearch = async () => {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                q: query,
                type: 'track',
            },
            headers: {
                'Authorization': `Bearer ${token}`
            },
         })
         .then((response) => {
             setResult(response.data.tracks.items)
        })
      }

    useEffect(() => {
        if(window.location.hash) {
            parseToken(window.location.hash)
        }
    }, []) 

    return (
        <>
            {
                !token &&
                <button
                    onClick={handleAuthUser} 
                    className="login-btn"   
                >
                    Login
                </button>
            }
            {
                token &&
                <>
                    <div className="search-container">
                        <input className="search-bar" value={query} onChange={(e) => setQuery(e.target.value)}></input>
                        <button className="search-btn" type="submit" onClick={handleSearch}>Search</button>
                    </div>
                    {/* {result.map((result) => (
                        <TracksInfo 
                            key={result.id}
                            cover={result.album.images[0].url} title={result.name} artists={result.artists[0].name} url={result.preview_url} />
                    ))} */}
                </>
            }
        </>
    )
}

export default SearchBar;