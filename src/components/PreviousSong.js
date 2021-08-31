import React, {useContext} from 'react'
import SpotifyContext from '../contexts/SpotifyContext'

const PreviousSong = () => {
	const spotify = useContext(SpotifyContext)

	const previousSong = async (e) => {
		e.preventDefault();
		await spotify.previous();
	}

	return (
		<button onClick={previousSong}>Previous</button>
	)
}

export default PreviousSong;