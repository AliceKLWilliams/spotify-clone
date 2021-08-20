import './App.css';

import {useState, useEffect} from 'react';
import SpotifyLogin from './components/SpotifyLogin';
import SpotifyPlayer from './components/SpotifyPlayer';
import SpotifyContext from './contexts/SpotifyContext';

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
    <SpotifyContext.Provider value={{token}}>
      <div className="App">
        {!token &&  <SpotifyLogin />}
        {token && <SpotifyPlayer />}
      </div>
    </SpotifyContext.Provider>
  );
}

export default App;
