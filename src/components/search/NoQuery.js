import React from 'react';
import AllGenres from '../genre/AllGenres';

const NoQuery = () => {
	return (
		<div>
			<h2 className="font-bold text-2xl mb-4">Browse all</h2>
			<AllGenres />
		</div>
	)
}

export default NoQuery;