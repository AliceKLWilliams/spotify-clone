import './index.css';

import {useState, useEffect} from 'react';
import SpotifyLogin from './components/SpotifyLogin';
import SpotifyContext from './contexts/SpotifyContext';
import SpotifyDashboard from './components/SpotifyDashboard';
import Spotify from './Spotify';

function App() {
  let [token, setToken] = useState('');


  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function(initial, item) {
          if (item) {
              var parts = item.split("=");
              initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
      }, {});

    window.location.hash = "";

    let token = hash.access_token;
    if (token) {
      setToken(token);
    }
  }, [setToken]);


  return (
    <SpotifyContext.Provider value={new Spotify(token)}>
      <div className="flex items-center justify-center flex-col min-h-screen">
        {!token &&  <SpotifyLogin />}
        {token && <SpotifyDashboard />}
      </div>
    </SpotifyContext.Provider>
  );
}

export default App;
