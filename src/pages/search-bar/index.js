import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchResult } from '../../result-context/searchResult';
import PlaylistForm from '../../components/forms';

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

      //form
    const [title, setTitle] = useState('');
    const [desciption, setDescription] = useState('');
    const {selectedSongs, setSelectedSongs} = SearchResult();

    const handleTitleChanges = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChanges = (e) => {
        setDescription(e.target.value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const uris = selectedSongs.map((song) => song.uri);
        console.log(uris);
        axios.get(`${BASE_URL}me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
                axios.post(`${BASE_URL}users/${response.data.id}/playlists`, {
                    name: title,
                    description: desciption,
                    collaborative: false,
                    public: false
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then((response) => {
                    axios ({
                        method: 'post',
                        url: `${BASE_URL}playlists/${response.data.id}/tracks`,
                        data: {
                            uris: uris
                        },
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    })
                    alert(`Playlist ${title} successfully added`);
                })
            }
        )
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
                    <PlaylistForm
                        handleTitleChanges={handleTitleChanges}
                        handleDescriptionChanges={handleDescriptionChanges}
                    />

                    <div className="search-container">
                        <input className="search-bar" value={query} onChange={(e) => setQuery(e.target.value)}></input>
                        <button className="search-btn" type="submit" onClick={handleSearch}>Search</button>
                    </div>
                </>
            }
        </>

                // <form className="input-form" onSubmit={handleFormSubmit}>
                //     <label>Tilte</label>
                //     <div>
                //         <input 
                //             className="song-title-lbl" 
                //             name="input" 
                //             id="input"
                //             type="text"
                //             onChange={handleTitleChanges}
                //             minLength="10"
                //         />
                //     </div>
                //     <div>
                //         <label>Song Description</label>
                //         <input 
                //             className="song-desc-lbl" 
                //             name="description" 
                //             id="description"
                //             type="text"
                //             onChange={handleDescriptionChanges}
                //         />
                //     </div>
                //     <div>
                //         <button
                //             className="song-form-btn"
                //             type="submit"
                //             id="song-form-btn"
                //         >
                //         Submit  
                //         </button>
                //     </div>
                // </form>
    )
}

export default SearchBar;