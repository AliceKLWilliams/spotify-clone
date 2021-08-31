import React, {useEffect, useContext, useState} from 'react';
import { useParams } from 'react-router';
import SpotifyContext from '../../contexts/SpotifyContext';

import AlbumHeader from '../AlbumHeader';

const Album = () => {
	const spotify = useContext(SpotifyContext);
	let [album, setAlbum] = useState(null);
	let {id} = useParams();

	useEffect(() => {
		spotify.getAlbum(id)
			.then(res => res.json())
			.then(album => {
				console.log(album);
				setAlbum(album);
			});
	}, [setAlbum, spotify, id]);

	if(!album){
		return <p>Loading...</p>
	}

	return (
		<AlbumHeader album={album}/>
	)
}

export default Album;