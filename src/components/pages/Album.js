import React, {useEffect, useContext, useState} from 'react';
import { useParams } from 'react-router';
import SpotifyContext from '../../contexts/SpotifyContext';

import AlbumHeader from '../AlbumHeader';
import AlbumSongs from '../AlbumSongs';

const Album = () => {
	const spotify = useContext(SpotifyContext);
	let [album, setAlbum] = useState(null);
	let [songs, setSongs] = useState([]);
	let [nextLink, setNextLink] = useState('');
	let {id} = useParams();

	useEffect(() => {
		spotify.getAlbum(id)
			.then(album => {
				setAlbum(album);
				setSongs(album.tracks.items);
				setNextLink(album.tracks.next);
			});
	}, [spotify, id, setAlbum, setSongs, setNextLink]);

	if (!album){
		return <p>Loading...</p>
	}

	return (
		<>
			<div className="mb-12">
				<AlbumHeader album={album}/>
			</div>
			<AlbumSongs songs={songs} nextLink={nextLink} setNextLink={setNextLink} setSongs={setSongs}/>
		</>
	)
}

export default Album;