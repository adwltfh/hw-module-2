import './style.css';
import React from 'react';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { SearchResult } from '../../result-context/searchResult';

const PlaylistForm = ({handleFormSubmit, handleTitleChanges, handleDescChanges}) => {
    // const {accTokenBearer} = useSelector((state) => state.token);

    // const [title, setTitle] = useState('');
    // const [desciption, setDescription] = useState('');
    // const {selectedSongs, setSelectedSongs} = SearchResult();

    // const handleTitleChanges = (e) => {
    //     setTitle(e.target.value);
    // }

    // const handleDescriptionChanges = (e) => {
    //     setDescription(e.target.value);
    // }

    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     const uris = selectedSongs.map((song) => song.uri);
    //     console.log(uris);
    //     axios.get(`https://api.spotify.com/v1/me`, {
    //         headers: {
    //             Authorization: accTokenBearer
    //         }
    //     }).then((response) => {
    //         console.log(response);
    //             axios.post(`https://api.spotify.com/v1/users/${response.data.id}/playlists`, {
    //                 name: title,
    //                 description: desciption,
    //                 collaborative: false,
    //                 public: false
    //             },
    //             {
    //                 headers: {
    //                     'Authorization': accTokenBearer,
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',
    //                 }
    //             }).then((response) => {
    //                 axios ({
    //                     method: 'post',
    //                     url: `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
    //                     data: {
    //                         uris: uris
    //                     },
    //                     headers: {
    //                         'Authorization': accTokenBearer,
    //                         'Accept': 'application/json',
    //                         'Content-Type': 'application/json',
    //                     }
    //                 })
    //                 alert(`Playlist ${title} successfully added`);
    //             })
    //         }
    //     )
    // }
    
    return (
        <div className='crt-playlist-container'>
            <h2>Create Playlist</h2>
            <div className='form-container'>
                <form className="input-form" onSubmit={handleFormSubmit}>
                    <div className="title-container">
                        <input 
                            className="song-title-lbl" 
                            name="input" 
                            id="input"
                            type="text"
                            onChange={handleTitleChanges}
                            minLength="10"
                            placeholder='Title'
                        />
                    </div>
                    <div className="desc-container">
                        <input 
                            className="song-desc-lbl" 
                            name="description" 
                            id="description"
                            type="text"
                            onChange={handleDescChanges}
                            placeholder='Description'
                        />
                    </div>
                    <div className="btn-container">
                        <button
                            className="song-form-btn"
                            type="submit"
                            id="song-form-btn"
                        >
                        Submit  
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default PlaylistForm;