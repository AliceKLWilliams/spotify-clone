import { useContext } from "react";
import SpotifyContext from "../contexts/SpotifyContext";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";

const PlayPause = ({isPlaying, setIsPlaying}) => {
    let spotify = useContext(SpotifyContext);

    const toggleMusic = (e) => {
        e.preventDefault();
        
        if(isPlaying) {
            spotify.pause();
        } else {
            spotify.play();
        }

        setIsPlaying(!isPlaying);
    }

    return (
        <button onClick={toggleMusic} className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center">
            {isPlaying ? <PauseIcon size="w-5 h-5"/> : <PlayIcon size="w-5 h-5"/>}
        </button>
    )
}

export default PlayPause;