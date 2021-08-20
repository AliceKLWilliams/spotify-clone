let SpotifyLogin = () => {
    const endpoint = 'https://accounts.spotify.com/authorize';
    const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUrl = 'http://localhost:3000';
    const scopes = [
        'user-read-currently-playing',
        'user-read-playback-state',
        'playlist-read-collaborative',
        'playlist-read-private'
    ];

    return (
        <a href={`${endpoint}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}>Login to Spotify</a>
    )   
}

export default SpotifyLogin;