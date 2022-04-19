import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../redux/store';
import { SearchProvider } from '../result-context/searchResult';
import data from '../data/data';

import App from '../App';
import Track from '../components/track';
import HomePage from '../pages/Home';
import SearchBarComponent from '../components/navbar/search';

test('renders login page', () => {
    render(<App />);
    const loginPage = screen.getByText(/Dawtify/i);
    expect(loginPage).toBeInTheDocument();
});

test('renders home page', () => {
    render (
        <Provider store={store}>
            <SearchProvider>
                <HomePage/>
            </SearchProvider>
        </Provider>
    );
    const profile = screen.getByText(/Hi,/i);
    expect(profile).toBeInTheDocument();
});

test('searchbar functionality test', () => {
    render (
        <Provider store={store}>
            <SearchProvider>
                <SearchBarComponent />
            </SearchProvider>
        </Provider>
    );
    const input = screen.getByPlaceholderText('Search…');
    userEvent.type(input, 'test');
});

test('tracks render functionality test', () => {
    render (
        <Provider store={store}>
            <SearchProvider>
                <Track
                    cover={data.album.images[0].url}
                    title={data.name}
                    artists={data.artists[0].name}
                    duration={()=>({})}
                    uri={data.uri}
                    song={data}
                />
            </SearchProvider>
        </Provider>
    );

    // cover
    const cover = screen.getByRole('img');
    expect(cover).toHaveAttribute('src', data.album.images[0].url);

    // title
    expect(screen.getByText(data.name)).toBeInTheDocument();

    // artists
    expect(screen.getByText(data.artists[0].name));

    expect(screen.getByText('Select')).toBeInTheDocument();

    const selectButton = screen.getByText('Select');
    userEvent.click(selectButton);
    expect(screen.getByText('Deselect')).toBeInTheDocument();
});

//