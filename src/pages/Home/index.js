import './style.css';
import PlaylistForm from '../../components/forms';
import Albums from '../../components/album';
import Track from '../../components/track';
import SearchBarComponent from '../../components/navbar/search';

const HomePage = ({children}) => {
    return (
        <>
            <SearchBarComponent />
            <div className='grid-album'>
                <Albums />
            </div>
            <div className='grid-parent'>
                <div className='grid-container'>
                    <PlaylistForm />
                    {children}
                </div>
                <div className='grid-container'>
                    <Track />
                </div>
            </div>
        </>

    );
};

export default HomePage;