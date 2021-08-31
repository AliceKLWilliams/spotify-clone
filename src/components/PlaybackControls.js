import React from 'react';
import PlayPause from './PlayPause';
import PreviousSong from './PreviousSong';

const PlaybackControls = ({isPlaying, setIsPlaying}) => {
	
	return (
		<div className="flex justify-center items-center mb-4">
			<div className="mr-4">
				<PreviousSong />
			</div>
			<PlayPause isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
		</div>
	)
} 

export default PlaybackControls;