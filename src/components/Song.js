import React from 'react';
import * as dayjs from 'dayjs';

import {millisToMinutesAndSeconds} from '../utils';

const Song = ({song, index}) => {
	let albumSrc = '';
	if (song.track.album.images[song.track.album.images.length - 1]) {
		albumSrc = song.track.album.images[song.track.album.images.length - 1].url;
	}

	let artists = song.track.artists.map(artist => artist.name).join(', ');

	return (
		<div className="flex items-center w-full">
			<span className="w-8 text-right mr-6">{index}</span>
			<span className="flex items-center mr-8 w-1/3 flex-grow">
				{albumSrc ? <img src={albumSrc} alt="" className="h-12 w-12 mr-4"/> : null}
				<div className="overflow-ellipsis overflow-hidden">
					<p className='overflow-ellipsis overflow-hidden'>{song.track.name}</p>
					<p className="text-grey-300 text-sm overflow-ellipsis overflow-hidden">{artists}</p>
				</div>
			</span>
			<span className="text-grey-300 text-sm w-1/5 overflow-hidden overflow-ellipsis text-sm mr-8 flex-grow">{song.track.album.name}</span>
			<span className="text-sm text-grey-300 mr-8">{dayjs(song.added_at).format('MMM D, YYYY')}</span>
			<span className="text-sm text-grey-300">{millisToMinutesAndSeconds(song.track.duration_ms)}</span>
		</div>
	)
}

export default Song;