# [Dawtify - Spotify Playlist App](https://dawtify.vercel.app)

### About Project

This is a website based app to search and create your own playlist with your favorite songs. This application uses the [Spotify Website API](https://developer.spotify.com/documentation/web-api/) so that your palylist you have made will be added directly to your account. You can also see your profile information through this application.

### Built With

This project is built using [React.js](https://reactjs.org/docs/getting-started.html) as the major framework and some libraries, such as:

* [React Router v5](https://reactrouter.com/) as the navigational component,
* [Material UI](https://material-ui.com/) as the UI component,
* [Typescript](https://www.typescriptlang.org/) for defining the variables,
* [Redux](https://github.com/axios/axios) for fetching the data from API,
* [Axios](https://github.com/axios/axios) to fetch the data from Spotify Web API.

## Getting Started

### Prerequisites

* NodeJs
  [Node.js Installer](https://nodejs.org/en/download/)
* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation

1. Get your own Client ID at [Spotify for Developer](https://developer.spotify.com/dashboard/login)
2. Clone the repo 
  ```sh
  git clone https://github.com/adwltfh/hw-module-2.git
  ```
3. Install npm packages
   ```sh
   npm install
   ```
4. Create a new file `.env.local` under the main directory. Enter your Client ID
   ```js
   REACT_APP_SPOTIFY_CLIENT_ID = <YOUR CLIENT ID>
   ```
   and add the following content
   ```js
   REACT_APP_SPOTIFY_BASE_URL = https://api.spotify.com/v1/
   REACT_APP_SPOTIFY_AUTHORIZE_LINK = https://accounts.spotify.com/authorize
   REACT_APP_REDIRECT_URI = <YOUR LOCAL NETWORK>
   REACT_APP_END_POINT = https://api.spotify.com/v1/users/
   ```
5. Enter the following command to run your project
   ```sh
   npm start
   ```

## Features

### Login Page

Connect with Spotify! Login to your account to use the features below.
<img src="https://user-images.githubusercontent.com/86681678/164491350-3c72cb8b-01b6-4433-a290-8ce04dc4a3cf.jpg">

### Search

You can search your favorite song through this feature.
<img src="https://user-images.githubusercontent.com/86681678/164493242-d8043847-586b-4572-bdb0-876455e8d36b.jpg">

### Create Playlist

Combine your selected favorite songs into your own private playlist! You can customized your own playlist title (min. 10 char) and description.
<img src="https://user-images.githubusercontent.com/86681678/164491433-86190d87-7d87-4924-b117-f90b23e5dff9.jpg">
<img src="https://user-images.githubusercontent.com/86681678/164491482-aad3094a-f953-4405-8caf-d0458976adf3.jpg">

### Profile View

You can see your username and profile photo of your Spotify Account on the top right of the page!
<img src="https://user-images.githubusercontent.com/86681678/164495120-c888f1a0-2f57-4836-96c5-7ea1c3e3e517.png">

## Contact

:camera_flash: Adawiyyah Latifah - [a.ltfh](https://instagram.com/a.ltfh/)
:email: Adawiyyah Latifah - adawiyyahlatifah@gmail.com
