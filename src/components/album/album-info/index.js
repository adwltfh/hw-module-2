const AlbumCover = ({cover}) => {
    return (
        <div className="img-container">
            <img 
                className="album-cover"
                src={cover}
            />
        </div>
    );
};

const AlbumInfo = ({title, artists, children}) => {
    return (
        <div className="album-title">
            <h1>{title}</h1>
            <p>{artists}</p>
            {children}
        </div>
    );
};

const AlbumButton = ({url}) => {
    return (
        <a href={url}><button className="albumBtn">Select</button></a>
    );
};

export {
    AlbumCover,
    AlbumInfo,
    AlbumButton
};