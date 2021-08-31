import React, {useContext, useEffect, useState} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import SearchResults from '../SearchResults';
import SearchFilters from '../SearchFilters';

const Search = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState(null);
	const [type, setType] = useState('artist');
	const [isLoading, setIsLoading] = useState(false);
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		if (!query) {
			setResults(null);
		}
		spotify.search(query, type)
			.then(results => {
				setResults(Object.values(results)[0]);
				setIsLoading(false);
			})
	}, [query, setResults, spotify, type, setIsLoading]);

	const setSearchType = (val) => {
		if (query) {
			setIsLoading(true);
		}
		setType(val);
	}

	return (
		<div>
			<form action="" className="mb-4">
				<input type="search" placeholder="Artists or songs" className="rounded-full py-2 px-4 text-black md:w-72" value={query} onChange={e => setQuery(e.target.value)}/>
			</form>

			<div className="mb-6">
				<SearchFilters selectedType={type} setType={setSearchType}/>
			</div>

			<SearchResults isLoading={isLoading} type={type} results={results}/>
		</div>
	)
}

export default Search;