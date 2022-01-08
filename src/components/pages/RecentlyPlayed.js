import {default as RecentlyPlayedList} from "../RecentlyPlayed";
import PageTitle from "../typography/PageTitle";

const RecentlyPlayed = () => {
    return (
        <>
            <PageTitle>Recently played</PageTitle>
            <RecentlyPlayedList />
        </>
    )
}

export default RecentlyPlayed;