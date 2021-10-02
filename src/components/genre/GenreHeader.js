import React, {useEffect, useState, useContext} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';

const GenreHeader = ({id}) => {
	let spotify = useContext(SpotifyContext);
	let [genre, setGenre] = useState(null);

	useEffect(() => {
		spotify.getGenre(id)
			.then(genre => setGenre(genre));
	}, [spotify, id, setGenre]);

	if(!genre) {
		return null;
	}

	return (
		<div className="pb-6 pt-32">
			<h1 className="font-bold text-4xl">{genre.name}</h1>
		</div>
	)
}

export default GenreHeader;