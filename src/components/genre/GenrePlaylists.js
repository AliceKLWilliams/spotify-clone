import React, {useContext, useEffect} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from '../InfiniteScroll';
import useGetNextBatch from '../../hooks/useGetNextBatch';

const GenrePlaylists = ({id}) => {
	let spotify = useContext(SpotifyContext);
	let [playlists, setPlaylists, setNextLink, loadMore] = useGetNextBatch('playlists');

	useEffect(() => {
		spotify.getPlaylistsForGenre(id)
			.then(({playlists}) => {
				setPlaylists(playlists.items);
				setNextLink(playlists.next);
			});
	}, [spotify, setPlaylists, id, setNextLink]);

	return (
		<InfiniteScroll getMoreItems={loadMore}>
			<ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
				{playlists.map(playlist => (
					<li>
						<NavLink to={`/playlists/${playlist.id}`} className="flex flex-col h-full rounded p-3 bg-grey-300 hover:bg-grey-200 focus:bg-grey-200">
							{playlist.images && playlist.images.length && <img alt="" className="mb-2 w-full h-auto" src={playlist.images[0].url} />}
							<span className="font-bold">{playlist.name}</span>
							<span className="text-xs text-light-grey">{playlist.description.length > 50 ? playlist.description.substring(0, 50) + '...' : playlist.description}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</InfiniteScroll>
	)
}

export default GenrePlaylists;