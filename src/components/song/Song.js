import React from 'react';
import * as dayjs from 'dayjs';
import {NavLink} from "react-router-dom";

import {millisToMinutesAndSeconds} from '../../utils';
import ArtistList from '../artist/ArtistList';

import ToggleLikeSong from './ToggleLikeSong';

const Song = ({song, index}) => {

	let albumSrc = '';
	if (song.track.album.images[song.track.album.images.length - 1]) {
		albumSrc = song.track.album.images[song.track.album.images.length - 1].url;
	}

	return (
		<tr className='flex items-center justify-between lg:table-row'>
			<td className="hidden lg:table-cell">{index}</td>
			<td className="flex items-center">
				{albumSrc ? <NavLink className="flex-shrink-0" to={`/albums/${song.track.album.id}`}><img src={albumSrc} alt="" className="h-12 w-12 mr-4"/></NavLink> : null}
				<span className="overflow-ellipsis overflow-hidden">
					<p className='overflow-ellipsis overflow-hidden'>{song.track.name}</p>
					<p className="text-light-grey text-sm overflow-ellipsis overflow-hidden">
						<ArtistList artists={song.track.artists} />
					</p>
				</span>
			</td>
			<td className="hidden lg:table-cell">
				<NavLink to={`/albums/${song.track.album.id}`} className="text-light-grey text-sm overflow-hidden overflow-ellipsis text-sm flex-grow hover:text-white focus:text-white hover:underline focus:underline">{song.track.album.name}</NavLink>
			</td>
			<td className="text-sm text-light-grey hidden lg:table-cell">{dayjs(song.added_at).format('MMM D, YYYY')}</td>
			<td className="text-sm text-light-grey hidden lg:table-cell">{millisToMinutesAndSeconds(song.track.duration_ms)}</td>
			<td className="text-sm text-light-grey inline-block lg:table-cell">
				<ToggleLikeSong song={song.track} iconClasses="w-6 h-6"/>
			</td>
		</tr>
	)
}

export default Song;