import React, {useEffect, useContext, useState} from 'react';
import { useParams } from 'react-router';
import SpotifyContext from '../../contexts/SpotifyContext';

import AlbumHeader from '../AlbumHeader';
import AlbumSongs from '../AlbumSongs';

const Album = () => {
	const spotify = useContext(SpotifyContext);
	let [album, setAlbum] = useState(null);
	let {id} = useParams();

	useEffect(() => {
		spotify.getAlbum(id)
			.then(album => {
				setAlbum(album);
			});
	}, [setAlbum, spotify, id]);

	if (!album){
		return <p>Loading...</p>
	}

	return (
		<>
			<div className="mb-12">
				<AlbumHeader album={album}/>
			</div>
			<AlbumSongs tracks={album.tracks} />
		</>
	)
}

export default Album;