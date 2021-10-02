import React from 'react';
import * as dayjs from 'dayjs';
import {NavLink} from "react-router-dom";

import {millisToMinutesAndSeconds} from '../../utils';
import ArtistList from '../artist/ArtistList';

const Song = ({song, index}) => {
	let albumSrc = '';
	if (song.track.album.images[song.track.album.images.length - 1]) {
		albumSrc = song.track.album.images[song.track.album.images.length - 1].url;
	}

	return (
		<div className="flex flex-col lg:flex-row lg:items-center w-full">
			<span className="hidden lg:block w-8 text-right mr-6">{index}</span>
			<span className="flex items-center mr-8 lg:w-1/3 flex-grow">
				{albumSrc ? <NavLink className="flex-shrink-0" to={`/albums/${song.track.album.id}`}><img src={albumSrc} alt="" className="h-12 w-12 mr-4"/></NavLink> : null}
				<div className="overflow-ellipsis overflow-hidden">
					<p className='overflow-ellipsis overflow-hidden'>{song.track.name}</p>
					<p className="text-light-grey text-sm overflow-ellipsis overflow-hidden">
						<ArtistList artists={song.track.artists} />
					</p>
				</div>
			</span>
			<NavLink to={`/albums/${song.track.album.id}`} className="text-light-grey text-sm lg:w-1/5 overflow-hidden overflow-ellipsis text-sm mr-8 flex-grow hover:text-white focus:text-white hover:underline focus:underline hidden lg:block">{song.track.album.name}</NavLink>
			<span className="text-sm text-light-grey mr-8 hidden lg:block">{dayjs(song.added_at).format('MMM D, YYYY')}</span>
			<span className="text-sm text-light-grey hidden lg:block">{millisToMinutesAndSeconds(song.track.duration_ms)}</span>
		</div>
	)
}

export default Song;