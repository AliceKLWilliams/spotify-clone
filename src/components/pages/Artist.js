import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SpotifyContext from '../../contexts/SpotifyContext';
import ArtistTopTracks from '../ArtistTopTracks';

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
    }, [id, setArtist]);

    if(!artist) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="pt-32 pb-16">
                <h1 class="font-black text-5xl">{artist.name}</h1>
            </div>
            <div>
                <h2 class="text-3xl font-bold mb-6">Popular</h2>
                <ArtistTopTracks id={id} />
            </div>
        </>
    )
}

export default Artist;