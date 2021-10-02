import React from 'react';

const TrackProgress = ({currentPosition, maxPosition, setPosition}) => {
	return (
		<input onChange={e => setPosition(e.target.value)} className="w-full" type="range" min="0" max={maxPosition} value={currentPosition} />
	)
}

export default TrackProgress;