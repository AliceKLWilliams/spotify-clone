import React, {useState, useEffect, useContext} from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

import Song from './Song';

const PlaylistSongs = ({playlistID}) => {
	let spotify = useContext(SpotifyContext);
	let [songs, setSongs] = useState([]);

	useEffect(() => {
		spotify.getSongsForPlaylist(playlistID)
			.then(songs => {
				setSongs(songs.items)
			});
	}, [setSongs, spotify, playlistID])

	if(!songs) {
		return <p>Loading...</p>
	}

	return (
		<ul className="space-y-2">
			{songs.map((song, idx) => (
				<li key={song.track.id}>
					<Song song={song} index={idx + 1}/>
				</li>
			))}
		</ul>
	)
}
export default PlaylistSongs;