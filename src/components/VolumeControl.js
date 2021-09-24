import React, { useContext } from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

const VolumeControl = () => {
    let spotify = useContext(SpotifyContext);

    const changeVolume = (e) => {
        let value = e.target.value;

        spotify.changeVolume(value);
    }

    return (
        <input min="0" max="100" step="1" type="range" onChange={changeVolume}/>
    )
}

export default VolumeControl;