import React from 'react';
import './App.css';
import Albums from './pages/album';
import SpotifyPlaylist from './pages/playlist';

function App() {
  return (
    <div className="App">
      <Albums />
      <hr/>
      <SpotifyPlaylist />
    </div>
  )
}

export default App;
