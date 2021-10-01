import {useEffect, useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyContext from '../contexts/SpotifyContext';
import PlaybackControls from './PlaybackControls';
import VolumeControl from './VolumeControl';

import {millisToMinutesAndSeconds} from '../utils';

let SpotifyPlayer = () => {
    const spotify = useContext(SpotifyContext);

    let [currentlyPlaying, setCurrentlyPlaying] = useState(null);
    let [isPlaying, setIsPlaying] = useState(false);
    let [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        spotify.getCurrentlyPlaying()
            .then(res => {
                setCurrentlyPlaying(res.item);
                setIsPlaying(res.is_playing);
                setCurrentPosition(res.progress_ms);
            })
    }, [setCurrentlyPlaying, setIsPlaying, setCurrentPosition, spotify]);

    if(!currentlyPlaying) {
        return null;
    }

    let artists = '';
    if(currentlyPlaying.artists) {
        artists = currentlyPlaying.artists.map(artist => artist.name).join(', ');
    }

    const progressStyle = {
        width: `${(currentPosition / currentlyPlaying.duration_ms) * 100}%`
    }

    return (
        <div className="sticky bottom-0 left-0 right-0 flex items-center justify-between border-t border-white p-4 bg-grey text-white">
            <div className="flex items-center mr-6">
                {currentlyPlaying.album &&  <NavLink to={`/albums/${currentlyPlaying.album.id}`}><img className="w-16 h-16 mr-4" src={currentlyPlaying.album.images[0].url} alt="" /></NavLink>}
                <div>
                    <p className="font-bold">{currentlyPlaying.name}</p>
                    <p className="text-sm">{artists}</p>
                </div>
            </div>

            <div className="w-1/2 flex flex-col justify-center mx-auto">
                <PlaybackControls isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                <div className="flex items-center">
                    {currentlyPlaying && <p className="mr-2 text-sm">{millisToMinutesAndSeconds(currentPosition)}</p> }
                    <div className="h-1 rounded-full w-full bg-white relative">
                        <div className="absolute top-0 bottom-0 left-0 bg-green" style={progressStyle}></div>
                    </div>
                    {currentlyPlaying && <p className="ml-2 text-sm">{millisToMinutesAndSeconds(currentlyPlaying.duration_ms)}</p> }
                </div>
            </div>

            <div>
                <VolumeControl />
            </div>
        </div>
    )
}

export default SpotifyPlayer;