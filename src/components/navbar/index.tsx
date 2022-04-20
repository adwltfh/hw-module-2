import React, { useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
// import { Avatar } from '@mui/material';

const useStyles = makeStyles(theme => ({
    toolbar: {
        minheight: 128,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: theme.spacing(3),
        },
    },
    logo: {
        letterSpacing: 1.25,
        fontWeight: 'bold',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
}));

const AppNavBar: React.FC = ({children}) => {
    const classes = useStyles();

    const {accTokenBearer} = useSelector((state: any) => state.token);

    // //USER PROFILE DISPLAY
    // const [displayName, setDisplayName] = useState<string>();
    // const [profleImage, setProfileImage] = useState<string>();

    // const getProfile = async() => {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_SPOTIFY_BASE_URL}me`, {
    //             headers: {
    //                 Authorization: accTokenBearer
    //             }
    //         });
    //         setDisplayName(response.data.display_name);
    //         setProfileImage(response.data.images[0]['url']);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // };

    // getProfile();

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="h2"
                        className={classes.logo}
                    >
                        Dawtify
                    </Typography>
                    <Box className={classes.menu}>
                        {children}
                    </Box>
                </Toolbar>
            </Box>
        </Container>
    );
};
export default AppNavBar;