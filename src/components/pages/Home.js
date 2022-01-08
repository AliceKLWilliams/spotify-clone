import AllGenres from "../genre/AllGenres";
import TimedGreeting from "../TimedGreeting";

const Home = () => {
    return (
        <>
            <TimedGreeting />

            <h2 className="font-bold text-2xl mb-4">Browse all</h2>
            <AllGenres />
        </>
    )
}

export default Home;