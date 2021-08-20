import {useEffect, useState, useContext} from 'react';
import SpotifyContext from '../contexts/SpotifyContext';

let SpotifyPlayer = () => {
    const spotifyContext = useContext(SpotifyContext);

    let [currentlyPlaying, setCurrentlyPlaying] = useState({});
    let [isPlaying, setIsPlaying] = useState(false);
    let [currentPosition, setCurrentPosition] = useState(0);

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
            setCurrentPosition(res.progress_ms);
        })
    }, [setCurrentlyPlaying, setIsPlaying, setCurrentPosition, spotifyContext]);

    if(!currentlyPlaying) {
        return <p>Couldn't get the current track.</p>
    }

    let artists = '';
    if(currentlyPlaying.artists) {
        artists = currentlyPlaying.artists.map(artist => artist.name).join(', ');
    }

    console.log(currentlyPlaying.duration_ms);
    console.log(currentPosition);

    const progressStyle = {
        width: `${(currentPosition / currentlyPlaying.duration_ms) * 100}%`
    }

    return (
        <div className="flex items-center justify-between border-t border-white p-4 bg-grey text-white">
            <div class="flex items-center">
                {currentlyPlaying.album &&  <img className="w-16 h-16 mr-4" src={currentlyPlaying.album.images[0].url} alt="" />}
                <div>
                    <p className="font-bold">{currentlyPlaying.name}</p>
                    <p className="text-sm">{artists}</p>
                </div>
            </div>

            <div className="w-1/2 flex flex-col justify-center">
                <div className="flex justify-center mb-2">
                    <button className="bg-white text-black rounded-full w-10 h-10">
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <div className="h-1 rounded-full w-full bg-white relative">
                    <div className="absolute top-0 bottom-0 left-0 bg-green" style={progressStyle}></div>
                </div>
            </div>
        </div>
    )
}

export default SpotifyPlayer;