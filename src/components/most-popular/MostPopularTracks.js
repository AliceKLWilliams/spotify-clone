import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';
import BasicTrack from '../track/BasicTrack';


const MostPopularTracks = ({numResults, period}) => {
    let [topTracks, setTopTracks] = useState([]);
    const spotify = useContext(SpotifyContext);

    useEffect(() => {
        spotify.getTopTracks({
            limit: numResults,
            timeRange: period
        })
        .then(tracks => {
            setTopTracks(tracks.items);
        });
    }, [spotify, setTopTracks, numResults, period]);

    if(!topTracks.length) {
        return <p>Unable to find your top tracks.</p>
    }

    return (
        <ol className="grid md:grid-cols-2 gap-4">
            {topTracks.map((track, idx) => (
                <li key={track.id} className="flex items-center">
                    <p className="mr-3 w-4">{idx + 1}</p>
                    <BasicTrack track={track} />
                </li>
            ))}
        </ol>
    )
}

export default MostPopularTracks;