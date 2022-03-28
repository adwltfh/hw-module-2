const TracksInfo = ({cover, title, artists, url}) => {
    return (
        <div className="tracks-component">
            <img 
                className="cover-img"
                src={cover}
            />
            <div className="song-info">
                <h4>{title}</h4>
                <p>{artists}</p>
            </div>
            <a href={url}><button className="btn">Select</button></a>
        </div>
    );
}

export default TracksInfo;