import React from 'react';
import './App.css';
import data from './data/data';
// import Album from './home/src/Album';

function App() {
  return (
    <div className="album-container">
      <div className="album-cover">
        <img 
          className="cover-img"
          src={data.album.images[0].url}
        />
      </div>
      <div className="song-title">
        <h4>{data.album.name}</h4>
      </div>
      <div className="song-artist">
        <p>{data.artists[0].name}</p>
      </div>
      <a href={data.album.artists[0].external_urls.spotify}><button className="btn">Select</button></a>
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className='albums'>
//           {data.map((dataItem) => {
//             return (
//               <Album
//                 cover = {dataItem.album.images[0].url}
//                 title = {dataItem.album.name}
//                 artists = {dataItem.artists[0].name}
//                 url = {dataItem.album.artists[0].external_urls.spotify}
//               />
//             )
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default App;
