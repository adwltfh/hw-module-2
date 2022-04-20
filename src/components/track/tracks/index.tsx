import '../style.css';
import { SearchResult } from '../../../result-context/searchResult';
import { Tracks } from '../../../data/TracksInterfaces';

type Props = {
    cover: string
    title: string
    artists: string
    uri: string
    song: any
    duration: any
}

const TracksInfo = ({cover, title, artists, uri, song, duration}: Props) => {
    const {selectedSongs, setSelectedSongs} = SearchResult();

    const generateButton = () => {
        const selected = selectedSongs.findIndex((song: Tracks) => song.uri === uri);
        if (selected !== -1) return 'Deselect';
        return 'Select';
    };

    const handleSelect = () => {
        const selected = selectedSongs.findIndex((song: Tracks) => song.uri === uri);
        if (selected > -1) {
            const newSongSelected = selectedSongs.filter((song: Tracks) => song.uri !== uri);
            setSelectedSongs(newSongSelected);
        }
        else {
            const newSongSelected = [...selectedSongs, song];
            setSelectedSongs(newSongSelected);
        }
    };

    return (
        <div className="tracks-container">
            <div className="card">
                <div className='cardFlex'>
                    <div className="tracks-component">
                        <img 
                            className="cover-img"
                            src={cover}
                            alt='album'
                        />
                        <div className="song-info">
                            <h4>{title}</h4>
                            <p className='artists'>{artists}</p>
                            <p className='duration'>{duration}</p>
                        </div>
                        <button className="btn" onClick={handleSelect}>
                            {generateButton()}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TracksInfo;