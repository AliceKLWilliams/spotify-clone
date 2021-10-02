import React from 'react';
import Heart from '../icons/Heart';

const LikedSongsIcon = ({size}) => {
	return (
		<span className={`bg-grey-300 mr-4 flex items-center justify-center liked-songs ${size === 'large' ? 'w-16 h-16 md:w-64 md:h-64' : 'w-6 h-6'}`}>
			<Heart className={`${size === 'large' ? 'w-10 h-10 md:w-32 md:h-32' : 'w-4 h-4'}`}/>
		</span>
	)
}

export default LikedSongsIcon;