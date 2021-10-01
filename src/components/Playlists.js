import {useEffect, useContext, useState} from 'react';

import {
    NavLink
} from "react-router-dom";


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
                <li key={playlist.id}>
                    <NavLink to={`/playlists/${playlist.id}`} className="w-full inline-block text-grey-200 hover:text-white focus:text-white">{playlist.name}</NavLink>
                </li>
            ))}
        </ul>
    )   
}

export default Playlists;