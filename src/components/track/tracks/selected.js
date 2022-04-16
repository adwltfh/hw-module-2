import { ImageListItem } from '@mui/material';
import './style.css';

const SelectedTracks = ({children}) => {
    return (
        <ImageListItem>
            {children}
        </ImageListItem>
    );
};
export default SelectedTracks;