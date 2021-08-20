import { useContext } from "react";
import SpotifyContext from "../contexts/SpotifyContext";

const PlayPause = ({isPlaying, setIsPlaying}) => {
    let spotifyContext = useContext(SpotifyContext);

    const toggleMusic = (e) => {
        e.preventDefault();

        let URL = 'https://api.spotify.com/v1/me/player/play'
        if(isPlaying) {
            URL = 'https://api.spotify.com/v1/me/player/pause'
        }

        fetch(URL, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${spotifyContext.token}`
            }
        });

        setIsPlaying(!isPlaying);
    }

    return (
        <button onClick={toggleMusic} className="bg-white text-black rounded-full w-10 h-10">
            {isPlaying ? 'Pause' : 'Play'}
        </button>
    )
}

export default PlayPause;