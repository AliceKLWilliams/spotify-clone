import React from 'react';
import { NavLink } from 'react-router-dom';
import { intersperse } from '../../utils';

const ArtistList = ({artists}) => {
	if (!artists || !artists.length) {
		return null;
	}

	return intersperse(artists.map(artist => {
        return <NavLink key={artist.id} className="hover:underline focus:underline" to={`/artists/${artist.id}`}>{artist.name}</NavLink>
    }), ', ');
}

export default ArtistList;