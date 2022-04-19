export interface Album {
    album_type: string;
    artists: Artists[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface Artists {
    external_urls: ArtistsExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ArtistsExternalUrls {
    spotify: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface ExternalUrls {
    spotify: string;
}

export interface songCoverImage {
    url: string;
}

//Tracks Components
export interface Tracks {
    cover: Album;
    artists: Artists[];
    title: string;
    duration: number;
    id: string;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

//SelectedTracks
export interface SelectedTracks {
    album: Album[];
    artists: Artists[];
    title: Album["name"];
}



