import './style.css';
import { SearchResult } from '../../../result-context/searchResult';

const TracksInfo = ({cover, title, artists, uri, song, duration}) => {
    const {selectedSongs, setSelectedSongs} = SearchResult();

    const generateButton = () => {
        const selected = selectedSongs.findIndex((song) => song.uri === uri);
        if (selected !== -1) return 'Deselect';
        return 'Select';
    };

    const handleSelect = () => {
        const selected = selectedSongs.findIndex((song) => song.uri === uri);
        if (selected > -1) {
            const newSongSelected = selectedSongs.filter((song) => song.uri !== uri);
            setSelectedSongs(newSongSelected);
        }
        else {
            const newSongSelected = [...selectedSongs, song];
            setSelectedSongs(newSongSelected);
        }
    };

    return (
        <div className="card">
            <div className='cardFlex'>
                <div className="tracks-component">
                    <img 
                        className="cover-img"
                        src={cover}
                    />
                    <div className="song-info">
                        <h4>{title}</h4>
                        <p>{artists}</p>
                        <p>{duration}</p>
                    </div>
                    <button className="btn" onClick={handleSelect}>
                        {generateButton()}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TracksInfo;