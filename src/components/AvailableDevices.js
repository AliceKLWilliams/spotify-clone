import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import SpotifyContext from '../contexts/SpotifyContext';
import DeviceList from './DeviceList';
import DeviceIcon from './icons/DeviceIcon';

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
            <button className="mr-2" onClick={() => setShowModal(oldVal => !oldVal)}>
                <DeviceIcon size="w-5" />
            </button>
            {showModal && (
                <div className="absolute -top-2 transform -translate-y-full -translate-x-1/2 bg-grey-300 rounded pt-2 text-center">
                    <h2 className="text-xl font-bold mb-4">Devices</h2>
                    <DeviceList devices={devices} />
                </div>
            )}
        </div>
    )
}

export default AvailableDevices;