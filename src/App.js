import './App.css';
import React from 'react';

import { SearchProvider, SearchResult } from './result-context/searchResult';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { getToken } from './redux/token';

import SearchBar from './pages/Home';
import TokenGetter from './redux/handleToken';
import store from './redux/store';

const App = () => {
  const {result} = SearchResult();
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch(getToken(token));
  
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/create-playlist'>
            {
              token ?
              <SearchBar/>
              : <Redirect from='/create-playlist' to='/login'/>
            }
          </Route>
        </Switch>

        <Switch>
          <Route exact path='/login'>
            <TokenGetter/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const AppContainer = () => {
  return (
    <Provider store={store}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </Provider>
  )
}

export default AppContainer;
