import React from 'react';
import { useParams } from 'react-router';
import GenreHeader from '../genre/GenreHeader';
import GenrePlaylists from '../genre/GenrePlaylists';

const Genre = () => {
	let {id} = useParams();

	return (
		<>
			<GenreHeader id={id}/>
			<GenrePlaylists id={id}/>
		</>
	)
}

export default Genre;