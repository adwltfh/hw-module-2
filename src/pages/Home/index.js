import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { SearchResult } from '../../result-context/searchResult';
import PlaylistForm from '../../components/forms';
import TokenGetter from '../../redux/handleToken';

const BASE_URL = process.env.REACT_APP_SPOTIFY_BASE_URL;

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {selectedSongs, setSelectedSongs} = SearchResult();
    const {result, setResult} = SearchResult();

    const token = useSelector((state) => state.token.value);

    //SEARCH BAR HANDLER
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

    //FORM HANDLER
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
                    description: description,
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

    return (
        <>
            <TokenGetter 
                query={query}
                handleSearch={handleSearch}
                handleSearchValue={(e) => setQuery(e.target.value)}
            />
            {
                token &&
                <>
                    <PlaylistForm
                        handleFormSubmit={handleFormSubmit}
                        handleTitleChanges={handleTitleChanges}
                        handleDescChanges={handleDescriptionChanges}
                    />
                </>
            }
        </>
    )
}

export default SearchBar;