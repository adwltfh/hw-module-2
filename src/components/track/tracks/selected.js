const SelectedTracks = () => {
    return (
        <div className="card">
            <div className='cardFlex'>
                <div className="tracks-component">
                    <img 
                        className="cover-img"
                        src={cover}
                    />
                    <div className="song-info">
                        <h4>{title}</h4>
                        <p>{artists}</p>
                    </div>
                    <button className="btn" onClick={handleSelect}>
                        {generateButton()}
                    </button>
                </div>
            </div>
        </div>
    )
}