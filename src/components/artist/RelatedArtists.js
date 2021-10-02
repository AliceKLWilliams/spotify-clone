import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyContext from '../../contexts/SpotifyContext';

const RelatedArtists = ({id, max}) => {
    let spotify = useContext(SpotifyContext);
    let [relatedArtists, setRelatedArtists] = useState([]);
    
    useEffect(() => {
        spotify.getArtistRelatedArtists(id)
            .then(res => {
                let newArtists = max ? res.artists.slice(0, max) : res.artists;
                setRelatedArtists(newArtists);
            })
    }, [id, spotify, max]);

    return (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {relatedArtists.map(artist => {
                let picture = '';

                if(artist.images && artist.images.length) {
                    picture = (
                        <div className="mb-2 w-full pb-full relative">
                            <img alt="" className="absolute inset-0 rounded-full object-cover w-full max-h-full h-full" src={artist.images[0].url}/>
                        </div>
                    )
                }

                return (
                    <li key={artist.id}>
                        <NavLink to={`/artists/${artist.id}`}>
                            {picture}
                            <p className="font-bold">{artist.name}</p>
                            <p className="text-light-grey text-sm">Artist</p>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default RelatedArtists;