import React, { useContext } from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

const DeviceList = ({devices}) => {
    const spotify = useContext(SpotifyContext);

    if(!devices.length) {
        return null;
    }

    const setDevice = (id) => {
        spotify.setDevice(id);
    }

    return (
        <ul className="space-y-3 text-left">
            {devices.map(device => (
                <li key={device.id}>
                    <button onClick={() => setDevice(device.id)} className={`p-2 w-full flex flex-col text-left whitespace-nowrap hover:bg-grey-200 focus:bg-grey-200 ${device.is_active ? 'text-green' : ''}`}>
                        {device.is_active ? <span className="font-bold">Listening On</span> : ''}
                        <span className="text-sm">{device.name} - {device.type}</span>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default DeviceList;