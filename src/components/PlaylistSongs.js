import React, {useState, useEffect, useContext} from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

import SongList from './SongList';

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

	return <SongList songs={songs} nextLink={nextLink} loadMore={loadMore}/>
}
export default PlaylistSongs;