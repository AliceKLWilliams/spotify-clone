import React from 'react';
import {NavLink} from "react-router-dom";


const BasicArtist = ({artist}) => {
	let image = null;
	if(artist.images && artist.images.length) {
		image = (
			<div className="w-full pt-full relative mb-2">
				<img src={artist.images[0].url} alt="" className="absolute inset-0 rounded-full object-cover h-full w-full" />
			</div>
		)
	}

	return(
		<NavLink to={`/artists/${artist.id}`} className="rounded-sm p-4" key={artist.id}>
			{image}
			<p className="font-bold">{artist.name}</p>
		</NavLink>
	)
}

export default BasicArtist;