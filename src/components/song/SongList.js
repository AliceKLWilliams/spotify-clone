import React, {useContext} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import Song from './Song';

const SongList = ({songs, nextLink, setNextLink, setSongs}) => {
	let spotify = useContext(SpotifyContext);

	if(!songs) {
		return <p>Loading...</p>
	}

	const loadMore = () => {
		spotify.get(nextLink)
			.then(res => res.json())
			.then((songs) => {
				setNextLink(songs.next)
				setSongs(prevSongs => prevSongs.concat(songs.items))
			});
	}

	return (
		<>
			<table className="table text-left">
				<thead className="hidden lg:table-header-group uppercase w-full mb-5 border-b border-light-grey pb-2">
					<tr>
						<th>#</th>
						<th className="">Title</th>
						<th className="">Album</th>
						<th className="">Date Added</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{songs.map((song, idx) => (
						<Song key={song.track.id} song={song} index={idx + 1}/>
					))}
				</tbody>

			</table>
			{nextLink ? <div className="flex justify-center"><button onClick={loadMore} className="border-2 text-white border-white rounded-full mt-6 mx-auto p-4">Load More</button></div> : null}
		</>
	)
}
export default SongList;