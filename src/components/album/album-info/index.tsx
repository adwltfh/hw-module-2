type Props = {
    cover: string
    title: string
    artists: string
    url: string
}

const AlbumCover = ({cover}: Props) => {
    return (
        <div className="img-container">
            <img 
                className="album-cover"
                src={cover}
            />
        </div>
    );
};

const AlbumInfo = ({title, artists, url}: Props) => {
    return (
        <div className="album-title">
            <h1>{title}</h1>
            <p>{artists}</p>
            <a href={url}><button className="albumBtn">Select</button></a>
        </div>
    );
};

export {
    AlbumCover,
    AlbumInfo,
};