import React from 'react'

const NumberOfResultsFilter = ({numResults, setNumResults}) => {
	return (
		<div>
			<label htmlFor="numResults">Number of Results:</label>
			<input className="ml-2 w-16 p-2 rounded bg-black" value={numResults} id="numResults" type="number" step="1" min="1" max="50" onChange={(e) => setNumResults(e.target.value)}/>
		</div>
	)
}

export default NumberOfResultsFilter;