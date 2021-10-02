import React from 'react';

const PageFilter = ({currentPage, setCurrentPage}) => {
	return (
		<div className="flex items-center space-x-4">
			<div className="search-filter">
				<input checked={currentPage === 'tracks'} type="radio" name="currentPage" id="tracks" value="tracks" onChange={(e) => setCurrentPage(e.target.value)} />
				<label htmlFor="tracks">Tracks</label>
			</div>

			<div className="search-filter">
				<input checked={currentPage === 'artists'} type="radio" name="currentPage" id="artists" value="artists" onChange={(e) => setCurrentPage(e.target.value)} />
				<label htmlFor="artists">Artists</label>
			</div>
		</div>
	)
}

export default PageFilter;