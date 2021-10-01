import React from 'react';
import { useState } from 'react';
import MostPopularTracks from '../MostPopularTracks';

const WhatYouLove = () => {
    let [currentPage, setCurrentPage] = useState('tracks');

    return (
        <div>
            <h1 className="font-black text-5xl mb-8">What you love</h1>

            <div className="flex items-center space-x-4 mb-12">
                <div className="search-filter">
                    <input checked={currentPage === 'tracks'} type="radio" name="currentPage" id="tracks" value="tracks" onChange={(e) => setCurrentPage(e.target.value)} />
                    <label htmlFor="tracks">Tracks</label>
                </div>

                <div className="search-filter">
                    <input checked={currentPage === 'artists'} type="radio" name="currentPage" id="artists" value="artists" onChange={(e) => setCurrentPage(e.target.value)} />
                    <label htmlFor="tracks">Artists</label>
                </div>
            </div>

            {currentPage === 'tracks' && <MostPopularTracks />}
        </div>
    )
}

export default WhatYouLove;