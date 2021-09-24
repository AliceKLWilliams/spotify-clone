import RecentlyPlayed from "../RecentlyPlayed";

const Home = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl mb-12">Good afternoon</h1>

            <h2 className="font-bold text-3xl mb-4">Your Recently Played</h2>
            <RecentlyPlayed />
        </div>
    )
}

export default Home;