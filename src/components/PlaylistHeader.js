import React from 'react';

const PlaylistHeader = ({playlist}) => (
	<div class="flex items-end mb-4">
		<img src={playlist.images[0].url} alt="" class="mr-4 w-64 h-64" />
		<div>
			<div class="mb-2">
				<span class="text-sm font-bold uppercase">PLAYLIST</span>
				<h1 class="font-bold text-4xl mb-2">{playlist.name}</h1>
				<p class="text-sm opacity-80">{playlist.description}</p>
			</div>
			<div class="flex items-center space-x-2">
				<p class="font-bold">{playlist.owner.display_name}</p>
				<p>{playlist.followers.total} Likes</p>
				<p>{playlist.tracks.total} songs</p>
			</div>
		</div>
	</div>
)

export default PlaylistHeader;