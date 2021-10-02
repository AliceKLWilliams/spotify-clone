import React, { useContext, useEffect, useState } from 'react';
import SpotifyContext from '../../contexts/SpotifyContext';

const VolumeControl = () => {
    let spotify = useContext(SpotifyContext);
    let [volume, setVolume] = useState(0);

    const changeVolume = (e) => {
        let value = e.target.value;

        spotify.changeVolume(value)
            .then(setVolume(value));
    }

    useEffect(() => {
        spotify.getPlaybackState()
            .then(playbackState => {
                setVolume(playbackState.device.volume_percent)
            })
    }, [setVolume, spotify])

    return (
        <input value={volume} className="w-32" min="0" max="100" step="1" type="range" onChange={changeVolume}/>
    )
}

export default VolumeControl;