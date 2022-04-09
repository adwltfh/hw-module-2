import React from 'react';

const PlaylistFormComponent = ({formInput, handleFormSubmit, handleFormInputChanges}) => {
    return (
        <div className='crt-playlist-container'>
            <h2>Create Playlist</h2>
            <div className='form-container'>
                <form className="input-form" onSubmit={handleFormSubmit}>
                    <div className="title-container">
                        <input 
                            className="song-title-lbl" 
                            name="titleInput" 
                            id="titleInput"
                            type="text"
                            onChange={handleFormInputChanges}
                            value={formInput.titleInput}
                            minLength="10"
                            placeholder='Title'
                        />
                    </div>
                    <div className="desc-container">
                        <input 
                            className="song-desc-lbl" 
                            name="descriptionInput" 
                            id="descriptionInput"
                            type="text"
                            onChange={handleFormInputChanges}
                            value={formInput.descriptionInput}
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
};

export default PlaylistFormComponent;