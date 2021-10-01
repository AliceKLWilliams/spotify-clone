import React from 'react';

const DeviceList = ({devices}) => {
    if(!devices.length) {
        return null;
    }

    return (
        <ul className="space-y-3 text-left">
            {devices.map(device => (
                <li key={device.id} className={`flex flex-col ${device.is_active ? 'text-green' : ''}`}>
                    {device.is_active ? <span className="font-bold">Listening On</span> : ''}
                    <span className="text-sm">{device.name} - {device.type}</span>
                </li>
            ))}
        </ul>
    )
}

export default DeviceList;