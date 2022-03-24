const AlbumCover = ({cover}) => {
    return (
        <div className="album-cover">
            <img 
                className="cover-img"
                src={cover}
            />
        </div>
    );
}

const AlbumInfo = ({title, artists, children}) => {
    return (
        <div className="song-info">
            <h4>{title}</h4>
            <p>{artists}</p>
            {children}
        </div>
    );
}

const AlbumButton = ({url}) => {
    return (
        <a href={url}><button className="btn">Select</button></a>
    );
}

export {
    AlbumCover,
    AlbumInfo,
    AlbumButton
};