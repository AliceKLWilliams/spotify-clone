import {useEffect, useContext, useState} from 'react';

import SpotifyContext from '../contexts/SpotifyContext';

let Playlists = () => {
    let spotify = useContext(SpotifyContext);
    let [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        spotify.getAllPlaylists()
            .then(playlists => {
                setPlaylists(playlists.items)
            })
    }, [setPlaylists, spotify]);

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