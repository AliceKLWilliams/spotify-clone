import React from 'react';
import BasicTrack from './BasicTrack';

const TrackSearchResults = ({results}) => {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5">
			{results.items.map(result => (
				<li className="w-full" key={result.id}>
					<BasicTrack track={result}/>
				</li>
			))}
		</ul>
	)
}

export default TrackSearchResults;