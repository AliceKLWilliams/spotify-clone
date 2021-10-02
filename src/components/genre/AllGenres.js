import React, { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';

const AllGenres = () => {
	let spotify = useContext(SpotifyContext);
	let [genres, setGenres] = useState([]);


	useEffect(() => {
		spotify.getAllGenres()
			.then(({categories}) => {
				setGenres(categories.items)
			})
	}, [spotify, setGenres]);

	console.log(genres);

	return (
		<ul className="grid grid-cols-2 gap-4 lg:grid-cols-6">
			{genres.map(genre => (
				<li class="rounded p-3 bg-grey-300 hover:bg-grey-200 focus:bg-grey-200">
					{genre.icons && genre.icons.length && <img className="mb-2 w-full h-auto" src={genre.icons[0].url} />}
					<span className="font-bold">{genre.name}</span>
				</li>
			))}
		</ul>
	)
}

export default AllGenres;