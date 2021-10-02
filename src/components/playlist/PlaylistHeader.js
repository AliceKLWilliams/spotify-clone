import React from 'react';

const PlaylistHeader = ({playlist}) => (
	<div className="flex flex-col md:flex-row md:items-end">
		<img src={playlist.images[0].url} alt="" className="md:mr-4 mb-2 md:mb-0 w-16 h-16 md:w-64 md:h-64 flex-shrink-0 object-cover" />
		<div>
			<div className="mb-2">
				<span className="text-sm font-bold uppercase">PLAYLIST</span>
				<h1 className="font-bold text-4xl mb-2">{playlist.name}</h1>
				<p className="text-sm opacity-80">{playlist.description}</p>
			</div>
			<div className="flex items-center space-x-2">
				<p className="font-bold">{playlist.owner.display_name}</p>
				<p>{playlist.followers.total} Likes</p>
				<p>{playlist.tracks.total} songs</p>
			</div>
		</div>
	</div>
)

export default PlaylistHeader;