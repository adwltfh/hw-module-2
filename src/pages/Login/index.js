import React from 'react';
import AppNavBar from '../../components/navbar';
import {LoginButton, LoginSign} from '../../components/navbar/login';

const LoginPage = () => {
    return (
        <>
            <AppNavBar>
                <LoginButton />
            </AppNavBar>
            <LoginSign />
        </>
    );
};

export default LoginPage;