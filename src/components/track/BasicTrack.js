import React from 'react';
import {millisToMinutesAndSeconds} from '../../utils';
import { NavLink } from 'react-router-dom';


const BasicTrack = ({track}) => {
    let album = null;
    if(track.album && track.album.images && track.album.images.length) {
        album = (
            <NavLink to={`/albums/${track.album.id}`}>
                <div className="w-16 pt-full relative mr-3">
                    <img src={track.album.images[0].url} alt="" className="absolute inset-0 w-full object-cover" />
                </div>
            </NavLink>
        )
    }

    let artists = track.artists ? track.artists.map(artist => {
        return <NavLink key={artist.id} className="hover:underline focus:underline mr-2" to={`/artists/${artist.id}`}>{artist.name}</NavLink>
    }) : '';

    return (
        <div className="flex items-center w-full">
            { album }
            <div className="mr-4">
                <p className="font-bold">{track.name}</p>
                <p className="text-light-grey">{artists}</p>
            </div>
            <p className="ml-auto">{millisToMinutesAndSeconds(track.duration_ms)}</p>
        </div>
    )
}

export default BasicTrack;