import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyContext from '../contexts/SpotifyContext';
import {millisToMinutesAndSeconds} from '../utils';

const ArtistTopTracks = ({id}) => {
    let spotify = useContext(SpotifyContext);

    let [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        spotify.getArtistTopTracks(id)
            .then(res => {
                setTopTracks(res.tracks);
            })
    }, [id, spotify]);

    if(!topTracks.length) {
        return <p>Loading...</p>
    }

    return (
        <ul className="space-y-4">
            {topTracks.map((track, idx) => {
                let album = "";

                if(track.album && track.album.images && track.album.images.length) {
                    album = <NavLink className="mr-4" to={`/albums/${track.album.id}`}><img alt="" className="w-10 h-10" src={track.album.images[track.album.images.length - 1].url}/></NavLink>
                }

                return (
                    <li className="flex items-center">
                        <span className="text-grey-200 w-6 text-right mr-4">{idx + 1}</span>
                        {album}
                        <p>{track.name}</p>
                        <span className="text-grey-200 ml-auto">{millisToMinutesAndSeconds(track.duration_ms)}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default ArtistTopTracks;