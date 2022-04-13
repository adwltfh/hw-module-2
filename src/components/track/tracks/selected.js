import './style.css';

const SelectedTracks = ({cover, title, artists, uri, song}) => {
    return (
        <div className="tracks-grid-component">
            <div className="cover-img-container">
                <img 
                    src={cover}
                />
            </div>
            <div className="song-info-container">
                <h4>{title}</h4>
                <p>{artists}</p>
            </div>
        </div>
    );
};

export default SelectedTracks;