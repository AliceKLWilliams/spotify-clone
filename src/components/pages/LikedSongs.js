import React from 'react';
import LikedSongsHeader from '../liked-songs/LikedSongsHeader';
import {default as LikedSongsComponent} from '../liked-songs/LikedSongs';

const LikedSongs = () => {
	return (
		<>
			<div className="mb-8">
				<LikedSongsHeader />
			</div>
			<LikedSongsComponent />
		</>
	)
}

export default LikedSongs;