import { Grid } from '@material-ui/core';
import { ImageListItem } from '@mui/material';
import '../style.css';

type Props = {
    children: JSX.Element
}

const SelectedTracks = ({children}: Props) => {
    return (
        <ImageListItem>
            {children}
        </ImageListItem>
    );
};
export default SelectedTracks;