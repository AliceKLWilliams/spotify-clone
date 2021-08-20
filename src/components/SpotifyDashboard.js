import SpotifyPlayer from "./SpotifyPlayer";
import Sidebar from './Sidebar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const SpotifyDashboard = () => {
    return (
        <Router>
            <div className="flex flex-col w-full min-h-screen">
                <div className="flex-1 flex">
                    <Sidebar />
                    <Switch>
                        <Route path="/search">
                            <div className="flex-1">
                                SEARCH
                            </div>
                        </Route>
                        <Route path="/">
                            <div className="flex-1">
                                HOME
                            </div>
                        </Route>
                    </Switch>
                </div>
                <SpotifyPlayer />
            </div>
        </Router>
    )
}

export default SpotifyDashboard;