import React, {useContext} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import InfiniteScroll from '../InfiniteScroll';
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

	if(!songs || !songs.length) {
		return <p>Loading...</p>
	}

	return (
		<InfiniteScroll getMoreItems={loadMore}>
			<table className="table text-left w-full">
				<thead className="hidden lg:table-header-group uppercase w-full mb-5 border-b border-light-grey pb-2">
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Album</th>
						<th>Date Added</th>
						<th>Time</th>
						<th>Like</th>
					</tr>
				</thead>
				<tbody>
					{songs.map((song, idx) => (
						<Song key={song.track.id} song={song} index={idx + 1}/>
					))}
				</tbody>

			</table>
		</InfiniteScroll>
	)
}
export default SongList;