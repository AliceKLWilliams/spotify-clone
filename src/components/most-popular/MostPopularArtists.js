import React, { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import BasicArtist from '../artist/BasicArtists';

const MostPopularArtists = ({period, numResults}) => {
	let [topArtists, setTopArtists] = useState([]);
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		spotify.getTopArtists({
			limit: numResults,
			timeRange: period
		})
		.then(res => {
			setTopArtists(res.items);
		})

	}, [spotify, period, numResults, setTopArtists])

	if(!topArtists.length) {
		return <p>Couldn't find your top artists.</p>
	}

	return (
		<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
			{topArtists.map(artist => (
				<BasicArtist artist={artist} />
			))}
		</div>
	)
}

export default MostPopularArtists;