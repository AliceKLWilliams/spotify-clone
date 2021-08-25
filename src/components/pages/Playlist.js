import React, {useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SpotifyContext from '../../contexts/SpotifyContext';

import PlaylistHeader from '../PlaylistHeader';

const Playlist = () => {
	let {id} = useParams();
	let [playlist, setPlaylist] = useState(null);
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		spotify.getPlaylist(id)
			.then(playlist => setPlaylist(playlist));
	}, [spotify, id, setPlaylist])

	if(!playlist) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<PlaylistHeader playlist={playlist} />
		</div>
	)
}

export default Playlist;