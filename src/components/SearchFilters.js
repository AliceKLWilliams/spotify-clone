import React from 'react';

const SearchFilters = ({selectedType, setType}) => {
	return (
		<div className="flex items-center space-x-4">
			<input type="radio" name="type" id="artist" value="artist" checked={selectedType === 'artist'} onChange={e => setType(e.target.value)} />
			<label htmlFor="artists">Artists</label>
			<input type="radio" name="type" id="track" value="track" checked={selectedType === 'track'} onChange={e => setType(e.target.value)} />
			<label htmlFor="tracks">Tracks</label>
		</div>
	)
}

export default SearchFilters;