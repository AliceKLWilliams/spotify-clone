import {useEffect, useState, useContext, useCallback} from 'react';
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

    const fetchCurrentlyPlaying = useCallback(
        () => {
            spotify.getCurrentlyPlaying()
                .then(res => {
                    console.log(res);
                    setCurrentlyPlaying(res.item);
                    setIsPlaying(res.is_playing);
                    setCurrentPosition(res.progress_ms);
                });
        },
        [setCurrentlyPlaying, setIsPlaying, setCurrentPosition, spotify],
    );

    useEffect(() => {
        fetchCurrentlyPlaying();
    }, [fetchCurrentlyPlaying]);

    const moveToPosition = newPosition => {
        spotify.setTrackPosition(newPosition)
            .then(setCurrentPosition(newPosition));
    }

    if (!currentlyPlaying) {
        return null;
    }

    return (
        <div className="sticky bottom-0 left-0 right-0 flex flex-col md:flex-row-reverse md:items-center md:justify-between border-t border-grey-300 p-4 bg-grey text-white">
            <div className="flex items-center mb-2 md:mb-0 md:ml-6 self-center">
                <AvailableDevices />
                <VolumeControl />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center mx-auto mb-2 md:mb-0">
                <PlaybackControls fetchCurrentlyPlaying={fetchCurrentlyPlaying} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                <div className="flex items-center">
                    {currentlyPlaying && <p className="mr-2 text-xs md:text-sm">{millisToMinutesAndSeconds(currentPosition)}</p> }
                    <TrackProgress setPosition={moveToPosition} currentPosition={currentPosition} maxPosition={currentlyPlaying.duration_ms}/>
                    {currentlyPlaying && <p className="ml-2 text-xs md:text-sm">{millisToMinutesAndSeconds(currentlyPlaying.duration_ms)}</p> }
                </div>
            </div>

            <div className="flex items-center md:mr-6">
                {currentlyPlaying.album &&  <NavLink className="flex-shrink-0" to={`/albums/${currentlyPlaying.album.id}`}><img className="w-8 h-8 mr-2 md:w-16 md:h-16 md:mr-4" src={currentlyPlaying.album.images[0].url} alt="" /></NavLink>}
                <div>
                    <p className="font-bold text-sm md:text-base">{currentlyPlaying.name}</p>
                    <p className="text-xs md:text-sm">
                        <ArtistList artists={currentlyPlaying.artists} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SpotifyPlayer;