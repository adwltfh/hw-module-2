import './style.css';
import PlaylistForm from '../../components/forms';
import Albums from '../../components/album';
import Track from '../../components/track';
import SearchBarComponent from '../../components/navbar/search';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const HomePage = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={12}>
                        <SearchBarComponent />
                    </Grid>
                    <Grid item xs={6} md={12}>
                        <Albums />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <PlaylistForm />
                    </Grid>
                    <Grid item xs={6} md={9}>
                        <Track />
                    </Grid>
                </Grid>
            </Box>
        </>

    );
};

export default HomePage;