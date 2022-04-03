import React, { useState } from 'react';
import './App.css';
import Albums from './pages/album';
import Track from './components/track';
import SearchBar from './pages/search-bar';
import { SearchProvider, SearchResult } from './result-context/searchResult';


const App = () => {
  const {result} = SearchResult();

  return (
    <div className="App">
      <Albums />
      <hr/>
      <SearchBar />
      <Track />
    </div>
  )
}

const AppContainer = () => {
  return (
    <SearchProvider>
      <App />
    </SearchProvider>
  )
}

export default AppContainer;
