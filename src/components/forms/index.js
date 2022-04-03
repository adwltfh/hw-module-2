import './style.css';

const PlaylistForm = ({handleFormSubmit, handleTitleChanges, handleDescriptionChanges}) => {
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
                            onChange={handleDescriptionChanges}
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