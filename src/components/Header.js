import React from 'react';

const Header = ({imageSrc, type, name, description}) => {
	return (
		<div className="flex items-end">
			<img src={imageSrc} alt="" className="mr-4 w-64 h-64" />
			<div>
				<div className="mb-2">
					<span className="text-sm font-bold uppercase">{type}</span>
					<h1 className="font-bold text-4xl mb-2">{name}</h1>
					{description ? <p className="text-sm opacity-80">{description}</p> : null}
				</div>
				<div className="flex items-center space-x-2">
					<p className="font-bold">{playlist.owner.display_name}</p>
					<p>{playlist.followers.total} Likes</p>
					<p>{playlist.tracks.total} songs</p>
				</div>
			</div>
		</div>
	)
}

export default Header;