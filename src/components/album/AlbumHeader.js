import React from 'react';
import AlbumMeta from './AlbumMeta';

const AlbumHeader = ({album}) => (
	<div className="flex flex-col md:flex-row md:items-end">
		<img src={album.images[0].url} alt="" className="md:mr-4 w-16 h-16 mb-2 md:mb-0 md:w-64 md:h-64" />
		<div>
			<div className="mb-2">
				<span className="text-sm font-bold uppercase">Album</span>
				<h1 className="font-bold text-2xl md:text-4xl mb-4">{album.name}</h1>
			</div>
			<AlbumMeta artists={album.artists} album={album}/>
		</div>
	</div>
)

export default AlbumHeader;