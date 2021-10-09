import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyContext from '../../contexts/SpotifyContext';
import InfiniteScroll from '../InfiniteScroll';

const AllGenres = () => {
	let spotify = useContext(SpotifyContext);
	let [genres, setGenres] = useState([]);
	let [nextLink, setNextLink] = useState(null);


	useEffect(() => {
		spotify.getAllGenres()
			.then(({categories}) => {
				setGenres(categories.items);
				setNextLink(categories.next);
			})
	}, [spotify, setGenres]);

	const loadMoreGenres = () => {
		if (!nextLink) {
			return Promise.resolve();
		}

		return spotify.get(nextLink)
				.then(res => res.json())
				.then(({categories}) => {
					setGenres(prevGenres => prevGenres.concat(categories.items));
					setNextLink(categories.next);
				});

	}
	
	return (
		<InfiniteScroll getMoreItems={() => loadMoreGenres()}>
			<ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
				{genres.map(genre => (
					<li key={genre.id}>
						<NavLink to={`/genres/${genre.id}`} className="flex flex-col h-full rounded p-3 bg-grey-300 hover:bg-grey-200 focus:bg-grey-200">
							{genre.icons && genre.icons.length && <img alt="" className="mb-2 w-full h-auto" src={genre.icons[0].url} />}
							<span className="font-bold">{genre.name}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</InfiniteScroll>
	)
}

export default AllGenres;