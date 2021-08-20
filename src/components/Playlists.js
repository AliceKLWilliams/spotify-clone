import {useEffect, useContext, useState} from 'react';

import SpotifyContext from '../contexts/SpotifyContext';

let Playlists = () => {
    let spotifyContext = useContext(SpotifyContext);
    let [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': `Bearer ${spotifyContext.token}`
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setPlaylists(res.items);
        })
    }, [setPlaylists, spotifyContext]);

    if(!playlists) {
        return <p>Couldn't get your playlists</p>
    }

    return (
        <ul>
            {playlists.map(playlist => (
                <li><a href={playlist.external_urls.spotify}>{playlist.name} ({playlist.tracks.total} Tracks)</a></li>
            ))}
        </ul>
    )   
}

export default Playlists;