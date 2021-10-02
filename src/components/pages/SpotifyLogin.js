let SpotifyLogin = () => {
    const endpoint = 'https://accounts.spotify.com/authorize';
    const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUrl = 'http://localhost:3000';
    const scopes = [
        'user-read-currently-playing',
        'user-read-playback-state',
        'playlist-read-collaborative',
        'playlist-read-private',
        'user-modify-playback-state',
        'user-read-recently-played',
        'user-top-read',
    ];

    return (
        <div className="flex items-center justify-center flex-col min-h-screen bg-black">
            <h1 className="font-bold text-4xl mb-12 text-white">Spotify Clone</h1>
            <a className="bg-green text-black py-6 px-8 rounded-full font-bold inline-block" href={`${endpoint}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}>Login to Spotify</a>
        </div>
    )   
}

export default SpotifyLogin;