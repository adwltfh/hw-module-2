import React from 'react';
import './style.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AppNavBar = ({children}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
                    >
                        Dawtify
                    </Typography>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
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