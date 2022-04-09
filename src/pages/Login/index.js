import React from 'react';
import AppNavBar from '../../components/navbar';
import LoginButton from '../../components/navbar/login';

const LoginPage = () => {
    return (
        <>
            <AppNavBar>
                <LoginButton />
            </AppNavBar>
        </>
    );
};

export default LoginPage;