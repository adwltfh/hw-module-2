import TracksInfo from './tracks';
import data from '../../data/data';
import { SearchResult } from '../../result-context/searchResult';
import TracksContainer from '../../components/container';
import SelectedTracks from './tracks/selected';
import { ImageList } from '@mui/material';
import PlaylistForm from '../forms';

const Track = () => {
    const {result, selectedSongs} = SearchResult();
    const ms_to_minute = (ms) => {
        let s, m;
        s = Math.floor(ms/1000);
        m = Math.floor(s/60);
        
        s = s % 60;
        m = m % 60;

        return m + ':' + s;
    };

    return( 
        <>
            {
                selectedSongs.length > 0 &&
                <>
                    <div className="selected-tracks-container">
                        <h2>Selected Songs</h2>
                        <ImageList
                            sx={{ gridAutoFlow: 'column', 
                                gridTemplateColumns: 'repeat(max(200px, 1fr))', 
                                gridAutoColumns: 'max(200px, 1fr)',
                                textAlign: 'center',
                                mx: 4,
                            }}
                            gap={20}
                        >
                            {selectedSongs.map((song) => {
                                return (
                                    <SelectedTracks key={song.uri}>
                                        <TracksInfo 
                                            cover={song.album.images[0].url}
                                            title={song.name}
                                            artists={song.artists[0].name}
                                            uri={song.uri}
                                            duration={ms_to_minute(song.duration_ms)}
                                        />
                                    </SelectedTracks>
                                );
                            })}
                        </ImageList>
                        <PlaylistForm />
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
                            duration={ms_to_minute(song.duration_ms)}
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
                            duration={ms_to_minute(song.duration_ms)}
                        />
                    </TracksContainer>
                ))
            }
        </>
    );
};
export default Track;