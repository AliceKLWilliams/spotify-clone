import React, { useContext, useEffect, useState } from 'react';
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

    console.log(topTracks);

    return (
        <ul class="space-y-4">
            {topTracks.map((track, idx) => {
                let album = "";

                if(track.album && track.album.images && track.album.images.length) {
                    album = <img className="w-10 h-10 mr-4" src={track.album.images[track.album.images.length - 1].url}/>
                }

                return (
                    <li className="flex items-center">
                        <span className="text-grey-300 w-6 text-right mr-4">{idx + 1}</span>
                        {album}
                        <p>{track.name}</p>
                        <span className="text-grey-300 ml-auto">{millisToMinutesAndSeconds(track.duration_ms)}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default ArtistTopTracks;