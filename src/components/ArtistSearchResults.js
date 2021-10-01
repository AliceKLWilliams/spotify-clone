import React from 'react'

const ArtistSearchResults = ({results}) => {
	return (
		<ul className="grid grid-cols-6 gap-4">
			{results.items.map(result => {
				let image = null;
				if(result.images && result.images.length) {
					image = (
						<div className="w-full pt-full relative mb-2">
							<img src={result.images[0].url} alt="" className="absolute inset-0 rounded-full object-cover h-full w-full" />
						</div>
					)
				}

				return (
					<li className="rounded-sm p-4" key={result.id}>
						{image}
						<p className="font-bold">{result.name}</p>
						<p className="text-sm text-grey-200">Artist</p>
					</li>
				)
			})}
		</ul>
	)
}

export default ArtistSearchResults;