import React, {useState, useEffect, useContext} from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

import Song from './Song';

const PlaylistSongs = ({playlistID}) => {
	let spotify = useContext(SpotifyContext);
	let [songs, setSongs] = useState([]);
	let [nextLink, setNextLink] = useState('');

	useEffect(() => {
		spotify.getSongsForPlaylist(playlistID)
			.then(songs => {
				setNextLink(songs.next);
				setSongs(songs.items);
			});
	}, [setSongs, spotify, playlistID, setNextLink]);

	const loadMore = () => {
		spotify.get(nextLink)
			.then(res => res.json())
			.then((songs) => {
				setNextLink(songs.next)
				setSongs(prevSongs => prevSongs.concat(songs.items))
			});
	}

	if(!songs) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<ul className="space-y-2">
				{songs.map((song, idx) => (
					<li key={song.track.id}>
						<Song song={song} index={idx + 1}/>
					</li>
				))}
			</ul>

			{nextLink ? <div className="flex justify-center"><button onClick={loadMore} className="border-2 text-white border-white rounded-full mt-6 mx-auto p-4">Load More</button></div> : null}
		</div>
	)
}
export default PlaylistSongs;