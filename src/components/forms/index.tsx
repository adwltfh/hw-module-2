import './style.css';
import React, { ChangeEvent, Context, FormEvent, FormEventHandler } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchResult } from '../../result-context/searchResult';
import PlaylistFormComponent from './forms-comp';
import { Button, Modal } from '@mui/material';
import { Box } from '@material-ui/core';

const style: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
};

const PlaylistForm: React.FC = () => {
    const {accTokenBearer} = useSelector((state: any) => state.token);

    const [formInput, setFormInput] = useState({
        titleInput: '',
        descriptionInput: '',
    });
    const {selectedSongs} = SearchResult();

    const handleFormInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormInput({...formInput, [name]: value});
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const uris = selectedSongs.map((song: { uri: any; }) => song.uri);
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
                    alert(`Playlist ${formInput.titleInput} successfully created`);
                });
            });
        } catch(err) {
            console.error(err);
        }
    };

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <div className='btn-playlist-container'>
                <Button variant="contained" size="large" onClick={handleOpen} className="make-playlist-btn">
                    Make Playlist
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <PlaylistFormComponent
                        formInput={formInput}
                        handleFormInputChanges={handleFormInputChanges}
                        handleFormSubmit={handleFormSubmit}
                    />
                </Box>
            </Modal>
        </>
    );

};

export default PlaylistForm;