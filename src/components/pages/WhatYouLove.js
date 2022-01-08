import React from 'react';
import { useState } from 'react';
import MostPopularArtists from '../most-popular/MostPopularArtists';
import MostPopularTracks from '../most-popular/MostPopularTracks';
import NumberOfResultsFilter from '../most-popular/NumberOfResultsFilter';
import PageFilter from '../most-popular/PageFilter';
import TimePeriodFilter from '../most-popular/TimePeriodFilter';
import PageTitle from '../typography/PageTitle';

const WhatYouLove = () => {
    let [currentPage, setCurrentPage] = useState('tracks');
    let [numResults, setNumResults] = useState(20);
    let [period, setPeriod] = useState('medium_term');

    return (
        <div>
            <PageTitle>What you love</PageTitle>

            <div className="mb-12 flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center">
                <div className="mr-8">
                    <PageFilter currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </div>

                <div className="mr-4">
                    <NumberOfResultsFilter numResults={numResults} setNumResults={setNumResults} />
                </div>

                <TimePeriodFilter period={period} setPeriod={setPeriod} />
            </div>

            {currentPage === 'tracks' && <MostPopularTracks numResults={numResults} period={period}/>}
            {currentPage === 'artists' && <MostPopularArtists numResults={numResults} period={period}/>}
        </div>
    )
}

export default WhatYouLove;