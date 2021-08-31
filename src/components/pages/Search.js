import React, {useContext, useEffect, useState} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import ArtistSearchResults from '../ArtistSearchResults';

const Search = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState(null);
	const [type, setType] = useState('artist');
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		if (!query) {
			return;
		}
		spotify.search(query, type)
			.then(results => {
				setResults(Object.values(results)[0]);
			})
	}, [query, setResults, spotify, type]);

	let resultsComponent = null;
	if(type === 'artist') {
		resultsComponent = <ArtistSearchResults results={results} />
	}


	return (
		<div>
			<form action="" className="mb-4">
				<input type="search" placeholder="Artists or songs" className="rounded-full py-2 px-4 text-black md:w-72" value={query} onChange={e => setQuery(e.target.value)}/>
			</form>

			<div className="flex items-center space-x-4">
				<input type="radio" name="type" id="artist" value="artist" checked={type === 'artist'} onChange={e => setType(e.target.value)} />
				<label htmlFor="artists">Artists</label>
				<input type="radio" name="type" id="track" value="track" checked={type === 'track'} onChange={e => setType(e.target.value)} />
				<label htmlFor="tracks">Tracks</label>
			</div>

			{results && resultsComponent}
		</div>
	)
}

export default Search;