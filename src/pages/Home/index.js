import './style.css';
import Albums from '../../components/album';
import Track from '../../components/track';
import SearchBarComponent from '../../components/navbar/search';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { CenterFocusStrong } from '@mui/icons-material';
import { grid } from '@mui/system';

//MUI STYLE
const useStyle = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    tracksComp: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 24,
        marginRight: 24,
        width: 2200
    },
}));
//MUI STYLE

const HomePage = () => {
    const classes = useStyle();

    return (
        <Grid container className={classes.container}>
            <Grid lg={12} item={true}>
                <SearchBarComponent />
            </Grid>
            <Grid className={classes.tracksComp}>
                <Grid xs={8} md={6} item={true}>
                    <Track />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;