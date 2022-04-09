import './style.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchResult } from '../../result-context/searchResult';
import PlaylistFormComponent from './forms-comp';

const PlaylistForm = () => {
    const {accTokenBearer} = useSelector((state) => state.token);

    const [formInput, setFormInput] = useState({
        titleInput: '',
        descriptionInput: '',
    });
    const {selectedSongs, setSelectedSongs} = SearchResult();

    const handleFormInputChanges = (e) => {
        const {name, value} = e.target;
        setFormInput({...formInput, [name]: value});
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const uris = selectedSongs.map((song) => song.uri);
        console.log(uris);
        try {
            axios.get(`${process.env.REACT_APP_SPOTIFY_BASE_URL}me`, {
                headers: {
                    Authorization: accTokenBearer
                }
            }).then((response) => {
                console.log(response);
                axios.post(`${process.env.REACT_APP_SPOTIFY_BASE_URL}users/${response.data.id}/playlists`, {
                    name: formInput.titleInput,
                    description: formInput.descriptionInput,
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
                        url: `${process.env.REACT_APP_SPOTIFY_BASE_URL}playlists/${response.data.id}/tracks`,
                        data: {
                            uris: uris
                        },
                        headers: {
                            'Authorization': accTokenBearer,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    });
                    alert(`Playlist ${formInput.titleInput} successfully added`);
                });
            });
        } catch(err) {
            console.error(err);
        }
    };
    
    return (
        <div>
            <PlaylistFormComponent
                formInput={formInput}
                handleFormInputChanges={handleFormInputChanges}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );

};

export default PlaylistForm;