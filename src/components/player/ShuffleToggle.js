import React, { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import Shuffle from '../icons/Shuffle';

const ShuffleToggle = () => {
	let [isShuffleOn, setShuffleState] = useState(false);
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		spotify.getPlaybackState()
			.then(playbackState => {
				setShuffleState(playbackState.shuffle_state)
			});
	}, [spotify, setShuffleState])

	const toggleShuffle = () => {
		spotify.setShuffle(!isShuffleOn)
			.then(setShuffleState(oldVal => !oldVal));
	}

	return (
		<button onClick={toggleShuffle} className={isShuffleOn ? 'text-green' : ''}>
			<Shuffle className="w-4" />
		</button>
	)
}

export default ShuffleToggle;