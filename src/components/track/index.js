import TracksInfo from './tracks';
import data from '../../data/data';
import { SearchResult } from '../../result-context/searchResult';
import { makeStyles } from '@material-ui/core/styles';
import SelectedTracks from './tracks/selected';
import { ImageList } from '@mui/material';
import PlaylistForm from '../forms';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    logo: {
        letterSpacing: 1,
        textAlign: 'center',
        paddingBottom: 10,
    },
}));

const Track = () => {
    const classes = useStyles();
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
                        <h4 className='title-selected'>Selected Songs</h4>
                        <ImageList
                            sx={{ 
                                maxwidth: 1200,
                                gridAutoFlow: 'column', 
                                gridAutoColumns: 'max(100px, 1fr)',
                                mx: 2,
                            }}
                            xs={8}
                            ms={6}
                            gap={3}
                        >
                            {selectedSongs.map((song) => {
                                return (
                                    <SelectedTracks key={song.uri}>
                                        <TracksInfo 
                                            cover={song.album.images[0].url}
                                            title={song.name}
                                            artists={song.artists[0].name}
                                            song={song}
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
                    <TracksInfo
                        key={song.id}
                        cover={song.album.images[0].url}
                        title={song.name}
                        artists={song.artists[0].name}
                        song={song}
                        uri={song.uri}
                        duration={ms_to_minute(song.duration_ms)}
                    />
                    // <TracksContainer key={song.id}>
                    // </TracksContainer>
                ))
            }
            {
                result.length > 0 && result.map((song) => (
                    <TracksInfo
                        key={song.id}
                        cover={song.album.images[0].url}
                        title={song.name}
                        artists={song.artists[0].name}
                        song={song}
                        uri={song.uri}
                        duration={ms_to_minute(song.duration_ms)}
                    />
                    // <TracksContainer key={song.id}>
                    // </TracksContainer>
                ))
            }
        </>
    );
};
export default Track;