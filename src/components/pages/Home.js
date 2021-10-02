import AllGenres from "../genre/AllGenres";
import RecentlyPlayed from "../RecentlyPlayed";
import TimedGreeting from "../TimedGreeting";

const Home = () => {
    return (
        <div>
            <TimedGreeting />

            <h2 className="font-bold text-2xl mb-4">Browse all</h2>
            <AllGenres />
        </div>
    )
}

export default Home;