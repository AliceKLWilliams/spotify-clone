import React, {useContext} from 'react'
import SpotifyContext from '../../contexts/SpotifyContext';
import {wait} from '../../utils';

const PreviousSong = ({fetchCurrentlyPlaying}) => {
	const spotify = useContext(SpotifyContext);


	const previousSong = async (e) => {
		e.preventDefault();
		await spotify.previous();
		await wait(1000);
		fetchCurrentlyPlaying();
	}

	return (
		<button onClick={previousSong}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
			</svg>
		</button>
	)
}

export default PreviousSong;