import Playlists from "./Playlists";

import {
    NavLink
  } from "react-router-dom";

let Sidebar = () => {

    return (
        <div className="py-4 px-6 bg-black text-white h-full">
            <div className="border-b border-white pb-4 space-y-2">
                <NavLink exact to="/" activeClassName="bg-grey" className="px-4 py-2 inline-block w-full rounded-lg">Home</NavLink>
                <NavLink exact to="/search" activeClassName="bg-grey" className="px-4 py-2 inline-block w-full rounded-lg">Search</NavLink>
            </div>
            <div className="pt-4">
                <Playlists />
            </div>
        </div>
    )   
}

export default Sidebar;