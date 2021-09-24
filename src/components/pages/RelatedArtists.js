import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SpotifyContext from '../../contexts/SpotifyContext';
import {default as RelatedArtistsComponent} from '../RelatedArtists';

const RelatedArtists = () => {
    let {id} = useParams();

    return (
        <>
            <h1 className="font-bold text-3xl mb-4">Fans also like</h1>
            <RelatedArtistsComponent id={id}/>
        </>
    )
}

export default RelatedArtists;