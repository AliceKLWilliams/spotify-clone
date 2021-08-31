import React from 'react';
import Song from './Song';

const SongList = ({songs, nextLink, loadMore}) => {

	if(!songs) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<div className="uppercase flex items-center w-full mb-5 border-b border-grey-300 pb-2">
				<p className="w-8 mr-6 text-right">#</p>
				<p className="w-1/3 flex-grow mr-8">Title</p>
				<p className="w-1/5 flex-grow mr-8">Album</p>
				<p className="mr-8">Date Added</p>
				<p>Time</p>
			</div>
			<ul className="space-y-2">
				{songs.map((song, idx) => (
					<li key={song.track.id}>
						<Song song={song} index={idx + 1}/>
					</li>
				))}
			</ul>

			{nextLink ? <div className="flex justify-center"><button onClick={loadMore} className="border-2 text-white border-white rounded-full mt-6 mx-auto p-4">Load More</button></div> : null}
		</div>
	)
}
export default SongList;