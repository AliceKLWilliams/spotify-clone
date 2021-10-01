import React from 'react';
import * as dayjs from 'dayjs';
import {NavLink} from "react-router-dom";

import {millisToMinutesAndSeconds} from '../utils';

const Song = ({song, index}) => {
	let albumSrc = '';
	if (song.track.album.images[song.track.album.images.length - 1]) {
		albumSrc = song.track.album.images[song.track.album.images.length - 1].url;
	}

	let artists = song.track.artists.map(artist => {
		return <NavLink className="focus:underline hover:underline" to={`/artists/${artist.id}`}>{artist.name}</NavLink>
	});

	return (
		<div className="flex items-center w-full">
			<span className="w-8 text-right mr-6">{index}</span>
			<span className="flex items-center mr-8 w-1/3 flex-grow">
				{albumSrc ? <NavLink to={`/albums/${song.track.album.id}`}><img src={albumSrc} alt="" className="h-12 w-12 mr-4"/></NavLink> : null}
				<div className="overflow-ellipsis overflow-hidden">
					<p className='overflow-ellipsis overflow-hidden'>{song.track.name}</p>
					<p className="text-grey-200 text-sm overflow-ellipsis overflow-hidden">{artists}</p>
				</div>
			</span>
			<NavLink to={`/albums/${song.track.album.id}`} className="text-grey-200 text-sm w-1/5 overflow-hidden overflow-ellipsis text-sm mr-8 flex-grow hover:text-white focus:text-white hover:underline focus:underline">{song.track.album.name}</NavLink>
			<span className="text-sm text-grey-200 mr-8">{dayjs(song.added_at).format('MMM D, YYYY')}</span>
			<span className="text-sm text-grey-200">{millisToMinutesAndSeconds(song.track.duration_ms)}</span>
		</div>
	)
}

export default Song;