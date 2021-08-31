import React, {useContext, useEffect, useState} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import SearchResults from '../SearchResults';

const Search = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState(null);
	const [type, setType] = useState('artist');
	const [isLoading, setIsLoading] = useState(false);
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		if (!query) {
			return;
		}
		setIsLoading(true);
		spotify.search(query, type)
			.then(results => {
				setResults(Object.values(results)[0]);
				setIsLoading(false);
			})
	}, [query, setResults, spotify, type, setIsLoading]);


	return (
		<div>
			<form action="" className="mb-4">
				<input type="search" placeholder="Artists or songs" className="rounded-full py-2 px-4 text-black md:w-72" value={query} onChange={e => setQuery(e.target.value)}/>
			</form>

			<div className="flex items-center space-x-4 mb-6">
				<input type="radio" name="type" id="artist" value="artist" checked={type === 'artist'} onChange={e => setType(e.target.value)} />
				<label htmlFor="artists">Artists</label>
				<input type="radio" name="type" id="track" value="track" checked={type === 'track'} onChange={e => setType(e.target.value)} />
				<label htmlFor="tracks">Tracks</label>
			</div>

			<SearchResults isLoading={isLoading} type={type} results={results}/>
		</div>
	)
}

export default Search;