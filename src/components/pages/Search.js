import React, {useContext, useEffect, useState} from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import SearchResults from '../search/SearchResults';
import SearchFilters from '../search/SearchFilters';
import NoQuery from '../search/NoQuery';

const Search = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState(null);
	const [type, setType] = useState('artist');
	const [isLoading, setIsLoading] = useState(false);
	let spotify = useContext(SpotifyContext);

	useEffect(() => {
		if(query.length) {
			spotify.search(query, type)
				.then(results => {
					setResults(Object.values(results)[0]);
					setIsLoading(false);
				})
		} else {
			setResults(null);
		}
	}, [query, setResults, spotify, type, setIsLoading]);

	const setSearchType = (val) => {
		if (query) {
			setIsLoading(true);
		}
		setType(val);
	}

	return (
		<div>
			<form className="mb-6 flex items-center">
				<input type="search" placeholder="Artists or songs" className="rounded-full py-2 px-5 text-black mr-4 md:w-72" value={query} onChange={e => setQuery(e.target.value)}/>

				<SearchFilters selectedType={type} setType={setSearchType}/>
			</form>

			{query.length ? <SearchResults isLoading={isLoading} type={type} results={results}/> : <NoQuery />}
		</div>
	)
}

export default Search;