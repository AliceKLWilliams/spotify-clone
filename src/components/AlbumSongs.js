import React, { useContext } from 'react';
import SpotifyContext from '../contexts/SpotifyContext';
import {millisToMinutesAndSeconds} from '../utils';

const AlbumSongs = ({songs, nextLink, setSongs, setNextLink}) => {
    let spotify = useContext(SpotifyContext);
    
	const loadMore = () => {
		spotify.get(nextLink)
			.then(res => res.json())
			.then((songs) => {
				setNextLink(songs.next)
				setSongs(prevSongs => prevSongs.concat(songs.items))
			});
	}

    if(!songs) {
        return <p>Loading...</p>;
    }
    
    return (
        <div>
            <div className="uppercase flex items-center w-full mb-5 border-b border-grey-300 pb-2">
                <p className="w-8 mr-6 text-right">#</p>
				<p className="flex-grow mr-8">Title</p>
				<p>Time</p>
            </div>

            <ul className="space-y-2">
				{songs.map((track, idx) => { 
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

            {nextLink && <button className="border-2 text-white border-white rounded-full mt-6 mx-auto p-4" onClick={loadMore}>Load More</button>}
        </div>
    )
}
export default AlbumSongs;