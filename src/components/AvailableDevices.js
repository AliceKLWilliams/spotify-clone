import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import SpotifyContext from '../contexts/SpotifyContext';
import DeviceList from './DeviceList';

const AvailableDevices = () => {
    let [showModal, setShowModal] = useState(false);
    let [devices, setDevices] = useState([]);
    let spotify = useContext(SpotifyContext);

    useEffect(() => {
        spotify.getDevices()
            .then(devices => {
                console.log(devices.devices);
                setDevices(devices.devices);
            })
    }, [spotify, setDevices]);

    return (
        <div className="relative">
            <button onClick={() => setShowModal(oldVal => !oldVal)}>Devices</button>
            {showModal && (
                <div className="absolute top-0 transform -translate-y-full bg-grey-300 rounded p-2 text-center">
                    <h2 className="text-xl font-bold mb-4">Devices</h2>
                    <DeviceList devices={devices} />
                </div>
            )}
        </div>
    )
}

export default AvailableDevices;