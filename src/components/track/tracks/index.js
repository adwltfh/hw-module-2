import './style.css';
import { SearchResult } from '../../../result-context/searchResult';
// import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { Box, width } from '@mui/system';

const TracksInfo = ({cover, title, artists, uri, song}) => {
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

    // console.log(selectedSongs)

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
                    </div>
                    <button className="btn" onClick={handleSelect}>
                        {generateButton()}
                    </button>
                </div>
            </div>
        </div>
    );
};

// <Card sx={{ display: 'flex', width: 500, variant:'outlined'}}>
//     <CardMedia component="img"
//         sx={{ width: 151 }}
//         image={cover}
//     />
//     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//             <Typography sx={{ fontSize: 18 }}>
//                 {title}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//                 {artists}
//             </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', pl: 1, pb: 1 }}>
//             <Button variant="text" onClick={handleSelect}>{generateButton()}</Button>
//         </Box>
//     </Box>
// </Card>
export default TracksInfo;