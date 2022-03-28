import './style.css';
import data from '../../data/data1';
import {AlbumCover, AlbumInfo, AlbumButton} from '../../components/album-info';

const Albums = () => {
    return (
        <div className="container">
            <div className="album-container">
                <AlbumCover cover={data.album.images[0].url} />
                <AlbumInfo
                    title={data.album.name}
                    artists={data.artists[0].name}>
                    <AlbumButton url={data.album.external_urls.spotify} />
                </AlbumInfo>
            </div>
        </div>
    )
}

export default Albums;