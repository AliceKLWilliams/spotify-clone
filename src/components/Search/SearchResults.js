import React from 'react';
import ArtistSearchResults from './ArtistSearchResults';
import TrackSearchResults from '../TrackSearchResults';

const SearchResults = ({isLoading, type, results}) => {
	if(isLoading) {
		return <p>Loading...</p>
	}

	if(!results || !results.items || !results.items.length) {
		return <p>No results found.</p>
	}

	if(type === 'artist') {
		return <ArtistSearchResults results={results} />
	}

	if(type === 'track') {
		return <TrackSearchResults results={results} />
	}

	return <p>Invalid type.</p>
}

export default SearchResults;