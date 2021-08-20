import SpotifyPlayer from "./SpotifyPlayer";
import Sidebar from './Sidebar';

const SpotifyDashboard = () => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="flex-1 flex">
                <Sidebar />
                <div className="flex-1">
                    PLACHOLDER
                </div>
            </div>
            <SpotifyPlayer />
        </div>
    )
}

export default SpotifyDashboard;