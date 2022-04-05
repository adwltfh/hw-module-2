import React, { useState } from 'react';
import './App.css';
import Albums from './components/album';
import Track from './components/track';
import SearchBar from './pages/Home';
// import AppNavBar from './components/navbar';
import { SearchProvider, SearchResult } from './result-context/searchResult';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  const {result} = SearchResult();

  return (
    <div className="App">
      {/* <AppNavBar /> */}
      <Albums />
      <hr/>
      <SearchBar />
      <Track />
    </div>
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
