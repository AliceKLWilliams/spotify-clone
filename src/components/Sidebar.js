import Playlists from "./playlist/Playlists";
import {NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import LikedSongsIcon from "./liked-songs/LikedSongsIcon";
import MainSidebarLink from "./links/MainSidebarLink";

let Sidebar = () => {
    let [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen])


    return (
        <div className={`sticky top-0 left-0 w-full bg-black text-white max-h-screen overflow-y-auto z-50 md:h-full md:z-0 ${menuOpen ? 'h-screen' : ''}`}>
            <div className="md:hidden w-full py-4 border-b border-grey-200 px-6 flex justify-end">
                <button onClick={() => setMenuOpen(oldVal => !oldVal)}>{menuOpen ? 'Close' : 'Open'}</button>
            </div>

            <div className={`py-4 px-6  ${menuOpen ? 'block' : 'hidden'} md:block`}>  
                <div className="pb-8 space-y-2">
                    <MainSidebarLink to="/">Home</MainSidebarLink>
                    <MainSidebarLink to="/search">Search</MainSidebarLink>
                    <MainSidebarLink to="/what-you-love">What you love</MainSidebarLink>
                    <MainSidebarLink to="/recently-played">Recently played</MainSidebarLink>
                </div>
                <div className="border-b border-white mb-4 pb-4">
                    <NavLink exact to="/liked-songs" activeClassName="opacity-100" className="flex items-center text-white opacity-70">
                        <LikedSongsIcon />
                        Liked Songs
                    </NavLink>
                </div>
                <div className="pt-4">
                    <Playlists />
                </div>
            </div>
        </div>
    )   
}

export default Sidebar;