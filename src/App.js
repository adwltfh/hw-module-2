import React from 'react';
import './App.css';
import Albums from './pages/album';
import SpotifyPlaylist from './pages/playlist';
import SearchBar from './pages/search-bar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Albums />
      <hr/>
      <SpotifyPlaylist />
    </div>
  )
}

export default App;
