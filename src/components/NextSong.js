import React, {useContext} from 'react'
import SpotifyContext from '../contexts/SpotifyContext'

const NextSong = () => {
	const spotify = useContext(SpotifyContext)

	const nextSong = async (e) => {
		e.preventDefault();
		await spotify.next();
	}

	return (
		<button onClick={nextSong}>Next</button>
	)
}

export default NextSong;