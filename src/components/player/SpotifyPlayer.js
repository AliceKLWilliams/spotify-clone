import {useEffect, useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyContext from '../../contexts/SpotifyContext';
import PlaybackControls from './PlaybackControls';
import VolumeControl from './VolumeControl';

import {millisToMinutesAndSeconds} from '../../utils';
import AvailableDevices from './AvailableDevices';
import ArtistList from '../artist/ArtistList';
import TrackProgress from './TrackProgress';

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

    const moveToPosition = newPosition => {
        spotify.setTrackPosition(newPosition)
            .then(setCurrentPosition(newPosition));
    }

    if(!currentlyPlaying) {
        return null;
    }

    return (
        <div className="sticky bottom-0 left-0 right-0 flex flex-col md:flex-row items-center justify-between border-t border-white p-4 bg-grey text-white">
            <div className="flex items-center mb-2 md:mb-0 md:mr-6">
                {currentlyPlaying.album &&  <NavLink className="flex-shrink-0" to={`/albums/${currentlyPlaying.album.id}`}><img className="w-16 h-16 mr-4" src={currentlyPlaying.album.images[0].url} alt="" /></NavLink>}
                <div>
                    <p className="font-bold">{currentlyPlaying.name}</p>
                    <p className="text-sm">
                        <ArtistList artists={currentlyPlaying.artists} />
                    </p>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center mx-auto mb-2 md:mb-0">
                <PlaybackControls isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                <div className="flex items-center">
                    {currentlyPlaying && <p className="mr-2 text-sm">{millisToMinutesAndSeconds(currentPosition)}</p> }
                    <TrackProgress setPosition={moveToPosition} currentPosition={currentPosition} maxPosition={currentlyPlaying.duration_ms}/>
                    {currentlyPlaying && <p className="ml-2 text-sm">{millisToMinutesAndSeconds(currentlyPlaying.duration_ms)}</p> }
                </div>
            </div>

            <div className="flex items-center">
                <AvailableDevices />
                <VolumeControl />
            </div>
        </div>
    )
}

export default SpotifyPlayer;