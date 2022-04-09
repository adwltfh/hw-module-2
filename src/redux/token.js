import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        accTokenBearer: '',
        value: window.localStorage.getItem('token')
    },
    reducers: {
        getToken: (state) => {
            const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
            const accToken = urlSearchParams.get('access_token');
            const accTokenBearer = `Bearer ${accToken}`;
            state.accTokenBearer = accTokenBearer;
        }
    }
});

export const {getToken} = tokenSlice.actions;
export default tokenSlice.reducer;