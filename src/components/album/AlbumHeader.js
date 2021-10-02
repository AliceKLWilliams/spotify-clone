import React from 'react';
import AlbumMeta from './AlbumMeta';

const AlbumHeader = ({album}) => (
	<div className="flex items-end">
		<img src={album.images[0].url} alt="" className="mr-4 w-64 h-64" />
		<div>
			<div className="mb-2">
				<span className="text-sm font-bold uppercase">Album</span>
				<h1 className="font-bold text-4xl mb-4">{album.name}</h1>
			</div>
			<AlbumMeta artists={album.artists} album={album}/>
		</div>
	</div>
)

export default AlbumHeader;