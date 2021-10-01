import React from 'react';
import { useState } from 'react';
import MostPopularTracks from '../MostPopularTracks';

const WhatYouLove = () => {
    let [currentPage, setCurrentPage] = useState('tracks');
    let [numResults, setNumResults] = useState(20);
    let [period, setPeriod] = useState('medium_term');


    return (
        <div>
            <h1 className="font-black text-5xl mb-8">What you love</h1>

            <div className="mb-12 flex items-center">
                <div className="flex items-center space-x-4 mr-8">
                    <div className="search-filter">
                        <input checked={currentPage === 'tracks'} type="radio" name="currentPage" id="tracks" value="tracks" onChange={(e) => setCurrentPage(e.target.value)} />
                        <label htmlFor="tracks">Tracks</label>
                    </div>

                    <div className="search-filter">
                        <input checked={currentPage === 'artists'} type="radio" name="currentPage" id="artists" value="artists" onChange={(e) => setCurrentPage(e.target.value)} />
                        <label htmlFor="tracks">Artists</label>
                    </div>
                </div>

                <div className="mr-4">
                    <label htmlFor="numResults">Number of Results:</label>
                    <input className="ml-2 text-black w-16 px-2" value={numResults} id="numResults" type="number" step="1" min="1" max="50" onChange={(e) => setNumResults(e.target.value)}/>
                </div>

                <div>
                    <select className="text-black" name="period" id="period" onChange={(e) => setPeriod(e.target.value)} value={period}>
                        <option value="long_term">All time</option>
                        <option value="medium_term">6 months</option>
                        <option value="short_term">4 weeks</option>
                    </select>
                </div>
            </div>

            {currentPage === 'tracks' && <MostPopularTracks numResults={numResults} period={period}/>}
        </div>
    )
}

export default WhatYouLove;