import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import SpotifyContext from '../../contexts/SpotifyContext';
import ArtistTopTracks from '../artist/ArtistTopTracks';
import RelatedArtists from '../artist/RelatedArtists';

const Artist = () => {
    let {id} = useParams();
    let spotify = useContext(SpotifyContext);
    let [artist, setArtist] = useState(null);

    useEffect(() => {
        spotify.getArtist(id)
            .then(artist => {
                setArtist(artist);
            })
    }, [spotify, id, setArtist]);

    if(!artist) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="pt-32 pb-16">
                <h1 className="font-black text-5xl">{artist.name}</h1>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Popular</h2>
                <ArtistTopTracks id={id} />
            </div>

            <div>
                <div className="flex mb-6 justify-between items-center">
                    <h2 className="text-3xl font-bold">Fans also like</h2>
                    <NavLink to={`/artists/${id}/related`} className="uppercase text-light-grey font-bold text-sm">See All</NavLink>
                </div>
                <RelatedArtists id={id} max="6"/>
            </div>
        </>
    )
}

export default Artist;