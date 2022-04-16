import './style.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchResult } from '../../result-context/searchResult';
import PlaylistFormComponent from './forms-comp';
import { Button, Modal } from '@mui/material';

const PlaylistForm = () => {
    const {accTokenBearer} = useSelector((state) => state.token);

    const [formInput, setFormInput] = useState({
        titleInput: '',
        descriptionInput: '',
    });
    const {selectedSongs} = SearchResult();

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Button onClick={handleOpen}>Make Playlist</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <PlaylistFormComponent
                    formInput={formInput}
                    handleFormInputChanges={handleFormInputChanges}
                    handleFormSubmit={handleFormSubmit}
                />
            </Modal>
        </>
    );

};

export default PlaylistForm;