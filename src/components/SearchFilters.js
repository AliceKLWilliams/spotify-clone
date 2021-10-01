import React from 'react';

const SearchFilters = ({selectedType, setType}) => {
	return (
		<div className="flex items-center space-x-4">
			<div className="search-filter">
				<input type="radio" name="type" id="artist" value="artist" checked={selectedType === 'artist'} onChange={e => setType(e.target.value)} />
				<label htmlFor="artist">Artists</label>
			</div>
			<div className="search-filter">
				<input type="radio" name="type" id="track" value="track" checked={selectedType === 'track'} onChange={e => setType(e.target.value)} />
				<label htmlFor="track">Tracks</label>
			</div>
		</div>
	)
}

export default SearchFilters;