import {useEffect, useState, useContext} from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

let SpotifyPlayer = () => {
    const spotifyContext = useContext(SpotifyContext);

    let [currentlyPlaying, setCurrentlyPlaying] = useState({});
    let [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${spotifyContext.token}`
            }
        })
        .then(res => res.json())
        .then(res => {
            setCurrentlyPlaying(res.item);
            setIsPlaying(res.is_playing);
        })
    }, [setCurrentlyPlaying, setIsPlaying, spotifyContext]);

    if(!currentlyPlaying) {
        return <p>Couldn't get the current track.</p>
    }

    let artists = '';
    if(currentlyPlaying.artists) {
        artists = currentlyPlaying.artists.map(artist => artist.name).join(', ');
    }

    return (
        <>
            {currentlyPlaying.album &&  <img src={currentlyPlaying.album.images[0].url} alt="" />}
            <p>{currentlyPlaying.name}</p>
            <p>{artists}</p>

            <p>{isPlaying ? 'Playing' : 'Paused'}</p>
        </>
    )
}

export default SpotifyPlayer;