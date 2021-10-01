import React from 'react';
import { NavLink } from 'react-router-dom';
import {millisToMinutesAndSeconds} from '../utils';

const TrackSearchResults = ({results}) => {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5">
			{results.items.map(result => {
				let artists = result.artists ? result.artists.map(artist => {
					return <NavLink key={artist.id} className="hover:underline focus:underline mr-2" to={`/artists/${artist.id}`}>{artist.name}</NavLink>
				}) : '';

				let album = null;
				if(result.album && result.album.images && result.album.images.length) {
					album = (
						<NavLink to={`/albums/${result.album.id}`}>
							<img src={result.album.images[0].url} alt="" className="w-16 h-16 mr-3 object-cover" />
						</NavLink>
					)
				}

				return  (
					<li className="flex items-center w-full" key={result.id}>
						{ album }
						<div className="mr-4">
							<p className="font-bold">{result.name}</p>
							<p className="text-light-grey">{artists}</p>
						</div>
						<p className="ml-auto">{millisToMinutesAndSeconds(result.duration_ms)}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default TrackSearchResults;