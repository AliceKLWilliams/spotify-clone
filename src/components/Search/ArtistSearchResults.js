import React from 'react'
import BasicArtist from '../artist/BasicArtist';

const ArtistSearchResults = ({results}) => {
	return (
		<ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
			{results.items.map(result => {
				return (
					<li key={result.id}>
						<BasicArtist artist={result} />
					</li>
				)
			})}
		</ul>
	)
}

export default ArtistSearchResults;