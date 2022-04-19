import './style.css';
import data from '../../data/data1';
import {AlbumCover, AlbumInfo} from './album-info';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    main: {
        height: 300,
        maxWidth: 1100,
        display: 'flex',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
    },
    albumCover: {
        position: 'relative',
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
            paddingRight: 0,
        },
    },
    albumInfo: {
        position: 'relative',
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
            paddingRight: 0,
        },
    },
}));

const Albums = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            <Grid container className={classes.main}>
                <Grid item md={12} className={classes.albumInfo}>
                    <AlbumCover cover={data.album.images[0].url} />
                    <AlbumInfo
                        title={data.album.name}
                        artists={data.artists[0].name}
                        url={data.album.external_urls.spotify}>
                    </AlbumInfo>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Albums;