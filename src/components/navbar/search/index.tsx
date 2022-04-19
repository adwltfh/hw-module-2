import React, { ChangeEvent } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchResult } from '../../../result-context/searchResult';

import { styled, alpha } from '@mui/material/styles';
import { Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import AppNavBar from '..';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SearchBarComponent: React.FC = () => {
    const {accTokenBearer} = useSelector((state: any) => state.token);
    const dispatch = useDispatch();

    const [queryInput, setQueryInput] = useState<string>('');
    const {setResult} = SearchResult();

    const handleSearchQueryInput = () => {
        const getSearchData = async() =>{ 
            try {
                const response = await axios.get(`${process.env.REACT_APP_SPOTIFY_BASE_URL}search`, {
                    params: {
                        q: queryInput,
                        type: 'track',
                    },
                    headers: {
                        'Authorization': accTokenBearer
                    },
                });
                setResult(response.data.tracks.items);
            } catch(err) {
                console.log(err);
            }
        };
        getSearchData();
    };

    const handleQueryInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
        setQueryInput(e.target.value);
    };

    return (

        <AppNavBar>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <Stack direction="row" spacing={2}>
                    <StyledInputBase
                        value={queryInput} 
                        onChange={handleQueryInputChanges}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <Button variant="contained" type="submit" onClick={handleSearchQueryInput}>Search</Button>
                </Stack>
            </Search>
        </AppNavBar>
    );
};

export default SearchBarComponent;