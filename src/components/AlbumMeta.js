import React, { useContext, useEffect, useState} from 'react'
import SpotifyContext from '../contexts/SpotifyContext';
import * as dayjs from 'dayjs';

const AlbumMeta = ({artists, album}) => {
	let [artist, setArtist] = useState(null);
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		spotify.getArtist(artists[0].id)
			.then(res => res.json())
			.then(artist => {
				setArtist(artist);
			})
	}, [spotify, setArtist, artists]);

	return (
		<div className="flex items-center space-x-2">
			{artist ? <img className="w-8 h-8 rounded-full" src={artist.images[artist.images.length -1].url} alt="" /> : null}
			{artist ? <p>{artist.name} &bull;</p> : null}
			<p>{dayjs(album.release_date).format('YYYY')} &bull;</p>
			<p>{album.total_tracks} songs</p>
		</div>
	)
}

export default AlbumMeta;