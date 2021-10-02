import React, {useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SpotifyContext from '../../contexts/SpotifyContext';

import PlaylistHeader from '../playlist/PlaylistHeader';
import PlaylistSongs from '../playlist/PlaylistSongs';

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
			<div className="mb-12">
				<PlaylistHeader playlist={playlist} />
			</div>
			<PlaylistSongs playlistID={playlist.id}/>
		</div>
	)
}

export default Playlist;