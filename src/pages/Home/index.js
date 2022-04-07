import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchResult } from '../../result-context/searchResult';
import axios from 'axios';
// import PlaylistForm from '../../components/forms';
// import Albums from '../../components/album';
// import Track from '../../components/track';

const BASE_URL = process.env.REACT_APP_SPOTIFY_BASE_URL;

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {selectedSongs, setSelectedSongs} = SearchResult();
    const {result, setResult} = SearchResult();

    const {accTokenBearer} = useSelector((state) => state.token);

    //SEARCH BAR HANDLER
    const handleSearch = async () => {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                q: query,
                type: 'track',
            },
            headers: {
                'Authorization': accTokenBearer
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
                Authorization: accTokenBearer
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
                        'Authorization': accTokenBearer,
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
                            'Authorization': accTokenBearer,
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
        {/* <TokenGetter 
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
            } */}
        {/* <Albums />
        <hr></hr>
        <TokenGetter 
            query={query}
            handleSearch={handleSearch}
            handleSearchValue={(e) => setQuery(e.target.value)}
        />
        <PlaylistForm
            handleFormSubmit={handleFormSubmit}
            handleTitleChanges={handleTitleChanges}
            handleDescChanges={handleDescriptionChanges}
        />
        <Track/> */}
        </>
    )
}

export default SearchBar;