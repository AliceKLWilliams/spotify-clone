import SpotifyPlayer from "./SpotifyPlayer";
import Sidebar from './Sidebar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Home";

const SpotifyDashboard = () => {
    return (
        <Router>
            <div className="flex flex-col w-full min-h-screen">
                <div className="flex-1 flex">
                    <Sidebar />
                    <div class="bg-grey p-6 w-full text-white">
                        <Switch>
                            <Route path="/search">
                                <div>
                                    <p>Search</p>
                                </div>
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