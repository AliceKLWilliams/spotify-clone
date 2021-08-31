import React from 'react'

const ArtistSearchResults = ({results}) => {
	return (
		<ul class="grid grid-cols-6 gap-4">
			{results.items.map(result => (
				<li className="rounded-sm p-4">
					{result.images && result.images.length && <img src={result.images[0].url} alt="" className="w-48 h-48 mb-2 rounded-full object-cover" />}
					<p className="font-bold">{result.name}</p>
					<p className="text-sm text-grey-300">Artist</p>
				</li>
			))}
		</ul>
	)
}

export default ArtistSearchResults;