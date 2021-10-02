import React from 'react';
import { useState } from 'react';
import MostPopularArtists from '../most-popular/MostPopularArtists';
import MostPopularTracks from '../most-popular/MostPopularTracks';
import NumberOfResultsFilter from '../most-popular/NumberOfResultsFilter';
import PageFilter from '../most-popular/PageFilter';
import TimePeriodFilter from '../most-popular/TimePeriodFilter';

const WhatYouLove = () => {
    let [currentPage, setCurrentPage] = useState('tracks');
    let [numResults, setNumResults] = useState(20);
    let [period, setPeriod] = useState('medium_term');

    return (
        <div>
            <h1 className="font-black text-5xl mb-12">What you love</h1>

            <div className="mb-12 flex items-center">
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