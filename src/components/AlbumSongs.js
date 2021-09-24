import React from 'react';
import {millisToMinutesAndSeconds} from '../utils';

const AlbumSongs = ({tracks}) => {

    return (
        <div>
            <div className="uppercase flex items-center w-full mb-5 border-b border-grey-300 pb-2">
                <p className="w-8 mr-6 text-right">#</p>
				<p className="flex-grow mr-8">Title</p>
				<p>Time</p>
            </div>

            <ul className="space-y-2">
				{tracks.items.map((track, idx) => { 
                    let artists = track.artists.map(artist => artist.name).join(', ');

                    return(
                        <li key={track.id}>
                        <div className="flex items-center w-full">
                            <span className="w-8 text-right mr-6">{idx + 1}</span>
                            <span className="mr-8 w-1/3 flex-grow">
                                <div className="overflow-ellipsis overflow-hidden">
                                    <p className='overflow-ellipsis overflow-hidden'>{track.name}</p>
                                    <p className="text-grey-300 text-sm overflow-ellipsis overflow-hidden">{artists}</p>
                                </div>
                            </span>
                            <span className="text-sm text-grey-300">{millisToMinutesAndSeconds(track.duration_ms)}</span>
                        </div>
                    </li>
                    )
                })}
			</ul>
        </div>
    )
}
export default AlbumSongs;