import TracksInfo from "../tracks";
import data from "../../data/data";
import { SearchResult } from "../../result-context/searchResult";

const Track = () => {
    const {result, selectedSongs} = SearchResult();

    return( 
        <>
            {
                selectedSongs.length > 0 &&
                <>
                    return (
                        <div>
                            <h3>Selected Songs</h3>
                            {selectedSongs.map((song) => {
                                return (
                                    <TracksInfo 
                                        key={song.uri}
                                        cover={song.album.images[0].url}
                                        title={song.name}
                                        artists={song.artists[0].name}
                                        uri={song.uri}
                                    />
                                )
                            })}
                        </div>
                    )
                </>
            }
            {
                result.length === 0 && data.map((song) => (
                    <TracksInfo
                        key={song.id}
                        cover={song.album.images[0].url}
                        title={song.name}
                        artists={song.artists[0].name}
                        uri={song.uri}
                        song={song}
                    />
                ))
            }
            {
                result.length > 0 && result.map((song) => (
                    <TracksInfo
                        key={song.id}
                        cover={song.album.images[0].url}
                        title={song.name}
                        artists={song.artists[0].name}
                        uri={song.uri}
                        song={song}
                    />
                ))
            }
        </>
    )
}
export default Track;