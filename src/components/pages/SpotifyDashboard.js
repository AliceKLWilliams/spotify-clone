import SpotifyPlayer from "../SpotifyPlayer";
import Sidebar from '../Sidebar';
import Playlist from "./Playlist";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Home";
import Album from './Album';
import Search from './Search';

const SpotifyDashboard = () => {
    return (
        <Router>
            <div className="flex flex-col w-full min-h-screen">
                <div className="flex-1 flex">
                    <div className="w-1/5">
                        <Sidebar />
                    </div>
                    <div className="bg-grey p-6 w-full text-white w-4/5">
                        <Switch>
                            <Route path="/search">
                                <Search />
                            </Route>
                            <Route path="/playlists/:id">
                                <Playlist />
                            </Route>
                            <Route path="/albums/:id">
                                <Album />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <SpotifyPlayer />
            </div>
        </Router>
    )
}

export default SpotifyDashboard;