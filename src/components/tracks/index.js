import { SearchResult } from "../../result-context/searchResult";

const TracksInfo = ({cover, title, artists, uri, song}) => {
    const {selectedSongs, setSelectedSongs} = SearchResult();

    const generateButton = () => {
        const selected = selected.findIndex((song) => song.uri === uri);
        if (selected !== -1) return 'Deslect';
        return 'Select';
    }

    const handleSelect = () => {
        const selected = selectedSongs.fineIndex((song) => song.uri === uri)
        if (selected > -1) {
            const newSongSelected = selectedSongs.filter((song) => song.uri !== uri);
            setSelectedSongs(newSongSelected);
        }
        else {
            const newSongSelected = [...selectedSongs, song];
            setSelectedSongs(newSongSelected);
        }
    }

    console.log(selectedSongs)

    return (
        <div className="tracks-component">
            <img 
                className="cover-img"
                src={cover}
            />
            <div className="song-info">
                <h4>{title}</h4>
                <p>{artists}</p>
            </div>
            <button className="btn" onClick={handleSelect}>
                    {generateButton}
            </button>
        </div>
    );
}

export default TracksInfo;