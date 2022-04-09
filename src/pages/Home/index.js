import PlaylistForm from '../../components/forms';
import Albums from '../../components/album';
import Track from '../../components/track';
import SearchBarComponent from '../../components/navbar/search';

const HomePage = () => {
    return (
        <>
            <SearchBarComponent />
            <Albums />
            <hr></hr>
            <PlaylistForm />
            <Track />
        </>

    );
};

export default HomePage;