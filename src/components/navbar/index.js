import React from 'react';
import './style.css';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';

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

const AppNavBar = ({children}) => {
    const classes = useStyles();

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
    
// <section className="nav">
//     <div className="nav-container">
//         <div className="nav-logo">
//             <h2>Dawtify</h2>
//         </div>
//         <nav>
//             {children}
//         </nav>
//     </div>
// </section>
export default AppNavBar;