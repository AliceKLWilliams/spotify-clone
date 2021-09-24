import React from 'react';
import {millisToMinutesAndSeconds} from '../utils';

const TrackSearchResults = ({results}) => {
	return (
		<ul className="grid grid-cols-1 gap-2">
			{results.items.map(result => {
				let artists = results.artists ? result.artists.map(artist => artist.name).join(', ') : '';

				return  (
					<li className="flex items-center w-full" key={result.id}>
						{result.album && result.album.images && result.album.images.length && <img src={result.album.images[0].url} alt="" className="w-16 h-16 mr-2 object-cover" />}
						<div>
							<p className="font-bold">{result.name}</p>
							<p className="text-grey-300">{artists}</p>
						</div>
						<p className="ml-auto">{millisToMinutesAndSeconds(result.duration_ms)}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default TrackSearchResults;