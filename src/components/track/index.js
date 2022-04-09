import TracksInfo from './tracks';
import data from '../../data/data';
import { SearchResult } from '../../result-context/searchResult';
import TracksContainer from '../../components/container';

const Track = () => {
    const {result, selectedSongs} = SearchResult();

    return( 
        <>
            {
                selectedSongs.length > 0 &&
                <>
                    <div className="selected-tracks-container">
                        <h3>Selected Songs</h3>
                        {selectedSongs.map((song) => {
                            return (
                                <TracksContainer key={song.uri}>
                                    <TracksInfo 
                                        cover={song.album.images[0].url}
                                        title={song.name}
                                        artists={song.artists[0].name}
                                        uri={song.uri}
                                    />
                                </TracksContainer>
                            );
                        })}
                    </div>
                    <br></br>
                </>
            }
            {
                result.length === 0 && data.map((song) => (
                    <TracksContainer key={song.id}>
                        <TracksInfo
                            cover={song.album.images[0].url}
                            title={song.name}
                            artists={song.artists[0].name}
                            uri={song.uri}
                            song={song}
                        />
                    </TracksContainer>
                ))
            }
            {
                result.length > 0 && result.map((song) => (
                    <TracksContainer key={song.id}>
                        <TracksInfo
                            key={song.id}
                            cover={song.album.images[0].url}
                            title={song.name}
                            artists={song.artists[0].name}
                            uri={song.uri}
                            song={song}
                        />
                    </TracksContainer>
                ))
            }
        </>
    );
};
export default Track;