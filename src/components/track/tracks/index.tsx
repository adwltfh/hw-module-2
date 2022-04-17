import './style.css';
import { SearchResult } from '../../../result-context/searchResult';
import {Tracks} from '../../../data/TracksInterfaces';

interface Props {
    TracksElement: Tracks;
}

const TracksInfo: React.FC<Props> = ({TracksElement}) => {
    const {cover, title, artists, uri, song, duration} = TracksElement;
    const {selectedSongs, setSelectedSongs}: any = SearchResult();

    const generateButton = () => {
        const selected = selectedSongs.findIndex((song: { uri: string; }) => song.uri === uri);
        if (selected !== -1) return 'Deselect';
        return 'Select';
    };

    const handleSelect = () => {
        const selected = selectedSongs.findIndex((song: { uri: string; }) => song.uri === uri);
        if (selected > -1) {
            const newSongSelected = selectedSongs.filter((song: { uri: string; }) => song.uri !== uri);
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