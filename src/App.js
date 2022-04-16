import './App.css';
import React from 'react';

import { SearchProvider } from './result-context/searchResult';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { getToken } from './redux/token';

import store from './redux/store';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

const App = () => {
    const {accTokenBearer} = useSelector((state) => state.token);
    const dispatch = useDispatch();

    const callLogin = () => {
        let component;
        if (accTokenBearer === 'Bearer null' || accTokenBearer === '') {
            console.log(`current token: ${accTokenBearer}`);
            component = <LoginPage />;
        } else {
            component = <Redirect to='/create-playlist' />;
        }
        return component;
    };

    const callback = () => {
        dispatch(getToken());
        let component;
        if (accTokenBearer !== 'Bearer null' || accTokenBearer !== '') {
            console.log(`current token: ${accTokenBearer}`);
            component = <Redirect to='/create-playlist' />;
        } else {
            component = <LoginPage />;
        }
        return component;
    };

    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path='/create-playlist'>
                        <HomePage />
                    </Route>
                    <Route exact path='/'>
                        {callLogin}
                    </Route>
                    <Route exact path='/callback'>
                        {callback}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

const AppContainer = () => {
    return (
        <Provider store={store}>
            <SearchProvider>
                <App />
            </SearchProvider>
        </Provider>
    );
};

export default AppContainer;
