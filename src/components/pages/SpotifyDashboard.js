import SpotifyPlayer from "../player/SpotifyPlayer";
import Sidebar from '../Sidebar';
import Playlist from "./Playlist";
import Artist from './Artist';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Home";
import Album from './Album';
import Search from './Search';
import RelatedArtists from "./RelatedArtists";
import WhatYouLove from "./WhatYouLove";
import LikedSongs from "./LikedSongs";

const SpotifyDashboard = () => {
    return (
        <Router>
            <div className="flex items-center justify-center flex-col min-h-screen">
                <div className="flex flex-col w-full min-h-screen">
                    <div className="flex-1 flex flex-col md:flex-row">
                        <div className="md:w-64 md:flex-shrink-0">
                            <Sidebar />
                        </div>
                        <div className="bg-grey p-6 w-full text-white flex-1">
                            <Switch>
                                <Route path="/search">
                                    <Search />
                                </Route>
                                <Route path="/what-you-love">
                                    <WhatYouLove />
                                </Route>
                                <Route path="/playlists/:id">
                                    <Playlist />
                                </Route>
                                <Route path="/albums/:id">
                                    <Album />
                                </Route>
                                <Route path="/artists/:id/related">
                                    <RelatedArtists />
                                </Route>
                                <Route path="/artists/:id">
                                    <Artist />
                                </Route>
                                <Route path="/liked-songs">
                                    <LikedSongs />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                    <SpotifyPlayer />
                </div>
            </div>
        </Router>
    )
}

export default SpotifyDashboard;