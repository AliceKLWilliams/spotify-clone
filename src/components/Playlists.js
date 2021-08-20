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
        <ul className="space-y-3">
            {playlists.map(playlist => (
                <li key={playlist.id}><a className="w-full inline-block" href={playlist.external_urls.spotify}>{playlist.name}</a></li>
            ))}
        </ul>
    )   
}

export default Playlists;