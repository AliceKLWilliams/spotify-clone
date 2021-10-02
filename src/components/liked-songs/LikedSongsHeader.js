import React, { useState, useContext, useEffect } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import LikedSongsIcon from '../liked-songs/LikedSongsIcon';

const LikedSongsHeader = () => {
	let [username, setUsername] = useState('');
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		spotify.getCurrentUserProfile()
			.then(profile => {
				setUsername(profile.display_name);
			});
	}, [spotify, setUsername]);

	return (
		<div className="flex flex-col md:flex-row md:items-end">
			<div className="md:mr-4 mb-2 md:mb-0">
				<LikedSongsIcon size="large"/>
			</div>
			<div>
				<div className="mb-2">
					<span className="text-sm font-bold uppercase">PLAYLIST</span>
					<h1 className="font-bold text-4xl mb-2">Liked Songs</h1>
				</div>
				<div className="flex items-center space-x-2">
					<p className="font-bold">{username}</p>
					<p>0 songs</p>
				</div>
			</div>
		</div>
	)
}

export default LikedSongsHeader;