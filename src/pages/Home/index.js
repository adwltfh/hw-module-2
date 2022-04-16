import './style.css';
import Albums from '../../components/album';
import Track from '../../components/track';
import SearchBarComponent from '../../components/navbar/search';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { flexbox } from '@mui/system';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    tracks: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
}));

const HomePage = () => {
    const classes = useStyle();

    return (
        <Grid container spacing={3} className={classes.container}>
            <Grid lg={12} item={true}>
                <SearchBarComponent />
            </Grid>
            <Grid lg={12} item={true}>
                <Albums />
            </Grid>
            <Grid className={classes.tracks}>
                <Grid lg={6} item={true}>
                    <Track />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;