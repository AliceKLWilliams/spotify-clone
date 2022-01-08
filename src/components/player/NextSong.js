import React, {useContext} from 'react'
import SpotifyContext from '../../contexts/SpotifyContext';
import {wait} from '../../utils';

const NextSong = ({fetchCurrentlyPlaying}) => {
	const spotify = useContext(SpotifyContext)

	const nextSong = async (e) => {
		e.preventDefault();
		await spotify.next();
		await wait(1000);
		fetchCurrentlyPlaying();
	}

	return (
		<button onClick={nextSong}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
			</svg>
		</button>
	)
}

export default NextSong;