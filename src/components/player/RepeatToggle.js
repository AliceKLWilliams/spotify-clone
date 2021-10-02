import React, { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import Repeat from '../icons/Repeat';

const RepeatToggle = () => {
	let states = [
		'off',
		'context',
		'track',
	];

	let [repeatState, setRepeatState] = useState('off');
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		spotify.getPlaybackState()
			.then(playbackState => {
				setRepeatState(playbackState.repeat_state);
			});
	}, [spotify, setRepeatState])

	const changeRepeatState = () => {
		let currIdx = states.indexOf(repeatState);

		let newState = currIdx < (states.length - 1) ? states[currIdx + 1] : states[0];
		
		spotify.setRepeatState(newState)
			.then(setRepeatState(newState));
	}

	return(
		<button onClick={changeRepeatState} className={`relative ${repeatState !== 'off' ? 'text-green' : ''}`}>
			{repeatState === 'track' && <span className="bg-green text-black w-3 h-3 text-xxs rounded-full inline-block absolute right-0 bottom-full transform -translate-y-1 translate-x-1">1</span>}
			<Repeat className="w-4"/>
			{repeatState !== 'off' && <span className="inline-block w-1 h-1 rounded-full bg-green absolute -bottom-2 left-1/2 -translate-x-1/2"></span>}
		</button>
	)
}

export default RepeatToggle;