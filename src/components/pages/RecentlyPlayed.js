import {default as RecentlyPlayedList} from "../RecentlyPlayed";

const RecentlyPlayed = () => {
    return (
        <>
            <h2 className="font-bold text-2xl mb-4">Recently played</h2>
            <RecentlyPlayedList />
        </>
    )
}

export default RecentlyPlayed;