import React, {useState, useEffect, useContext} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';

import SongList from '../song/SongList';

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

	return <SongList songs={songs} nextLink={nextLink} setSongs={setSongs} setNextLink={setNextLink}/>
}
export default PlaylistSongs;