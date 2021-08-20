import React from 'react';

let spotifyData = {
    token: '',
};
  
const SpotifyContext = React.createContext(spotifyData);

export default SpotifyContext;