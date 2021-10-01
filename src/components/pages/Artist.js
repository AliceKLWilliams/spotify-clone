import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import SpotifyContext from '../../contexts/SpotifyContext';
import ArtistTopTracks from '../ArtistTopTracks';
import RelatedArtists from '../RelatedArtists';

const Artist = () => {
    let {id} = useParams();
    let spotify = useContext(SpotifyContext);
    let [artist, setArtist] = useState(null);

    useEffect(() => {
        spotify.getArtist(id)
            .then(artist => {
                console.log(artist);
                setArtist(artist);
            })
    }, [spotify, id, setArtist]);

    if(!artist) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="pt-32 pb-16">
                <h1 class="font-black text-5xl">{artist.name}</h1>
            </div>
            <div className="mb-12">
                <h2 class="text-3xl font-bold mb-6">Popular</h2>
                <ArtistTopTracks id={id} />
            </div>

            <div>
                <div class="flex mb-6 justify-between items-center">
                    <h2 class="text-3xl font-bold">Fans also like</h2>
                    <NavLink to={`/artists/${id}/related`} className="uppercase text-grey-200 font-bold text-sm">See All</NavLink>
                </div>
                <RelatedArtists id={id} max="6"/>
            </div>
        </>
    )
}

export default Artist;