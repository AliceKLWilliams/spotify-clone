import React from 'react';
import PlayPause from './PlayPause';
import PreviousSong from './PreviousSong';
import NextSong from './NextSong';
import ShuffleToggle from './ShuffleToggle';
import RepeatToggle from './RepeatToggle';

const PlaybackControls = ({isPlaying, setIsPlaying}) => {
	return (
		<div className="flex justify-center items-center mb-4">
			<div className="mr-6">
				<ShuffleToggle />
			</div>
			<div className="mr-4">
				<PreviousSong />
			</div>
			<PlayPause isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
			<div className="ml-4">
				<NextSong />
			</div>
			<div className="ml-6">
				<RepeatToggle />
			</div>
		</div>
	)
} 

export default PlaybackControls;