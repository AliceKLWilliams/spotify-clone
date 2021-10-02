import React, { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import SongList from '../song/SongList';

const LikedSongs = () => {
	let spotify = useContext(SpotifyContext);
	let [likedSongs, setLikedSongs] = useState([]);
	let [nextLink, setNextLink] = useState(null);

	useEffect(() => {
		spotify.getLikedSongs()
			.then(res => {
				setLikedSongs(res.items);
				setNextLink(res.next);
			});
	}, [spotify, setLikedSongs])

	return <SongList songs={likedSongs} nextLink={nextLink} setSongs={setLikedSongs} setNextLink={setNextLink}/>
}

export default LikedSongs;