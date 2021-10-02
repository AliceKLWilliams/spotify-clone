import React from 'react'
import BasicArtist from './BasicArtists';

const ArtistSearchResults = ({results}) => {
	return (
		<ul className="grid grid-cols-6 gap-4">
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