import React, { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../contexts/SpotifyContext';
import {NavLink} from "react-router-dom";

let RecentlyPlayed = () => {
    let spotify = useContext(SpotifyContext);
    let [recentlyPlayed, setRecentlyPlayed] = useState([]);

    useEffect(() => {
		spotify.getRecentlyPlayed()
			.then(recentlyPlayed => {
                // Remove duplicates
                recentlyPlayed.items = recentlyPlayed.items.filter((item, idx, self) => {
                    return idx === self.findIndex(otherItem => {
                        return item.track.id === otherItem.track.id;
                    })
                });
				setRecentlyPlayed(recentlyPlayed)
			});
	}, [spotify, setRecentlyPlayed]);

    if(!recentlyPlayed.items) {
        return <p>Loading...</p>;
    }


    return (
        <ul className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-6">
            {recentlyPlayed.items.map(item => {
                            
                let album = '';
                if(item.track.album && item.track.album.images && item.track.album.images.length) {
                    album = (
                        <NavLink to={`/albums/${item.track.album.id}`}>
                            <img src={item.track.album.images[0].url} alt="" className="w-full mr-2 object-cover mb-2" />
                        </NavLink>
                    )
                }

                return(
                    <li key={item.track.id}>
                        { album }
                        <p className="font-bold">{item.track.name}</p>
                        <p className="text-grey-200 text-sm">{item.track.artists.map(artist => {
                            return <NavLink className="focus:underline hover:underline mr-2" to={`/artists/${artist.id}`}>{artist.name}</NavLink>
                        })}</p>
                    </li>
                )
            })}

        </ul>
    )
}

export default RecentlyPlayed;