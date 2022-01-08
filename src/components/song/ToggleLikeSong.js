import React, {useContext, useEffect, useState} from 'react';

import SpotifyContext from '../../contexts/SpotifyContext';

import HeartOutline from '../icons/HeartOutline';
import Heart from '../icons/Heart';

const ToggleLikeSong = ({song, iconClasses}) => {
	let spotify = useContext(SpotifyContext);

	let [isLiked, setIsLiked] = useState(false);
	
	useEffect(() => {
		spotify.isTrackSaved(song.id)
			.then(res => res.json())
			.then(res => {
				setIsLiked(res[0]);
			})
	}, [spotify, song])

	const toggleLike = (id) => {
		if (isLiked) {
			spotify.unsaveTrack(id)
				.then(() => {
					setIsLiked(false);
				});
		} else {
			spotify.saveTrack(id)
				.then(() => {
					setIsLiked(true);
				});
		}
	}

	return (
		<button onClick={() => toggleLike(song.id)}>
			{isLiked ? <Heart className={iconClasses}/> : <HeartOutline className={iconClasses} />}
			<span className='sr-only'>{isLiked ? 'Unlike' : 'Like'}</span>
		</button>
	);
}

export default ToggleLikeSong;