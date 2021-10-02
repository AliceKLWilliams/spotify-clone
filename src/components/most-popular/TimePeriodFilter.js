import React from 'react'

const TimePeriodFilter = ({period, setPeriod}) => {
	return (
		<select className="bg-black rounded px-3 py-2" name="period" id="period" onChange={(e) => setPeriod(e.target.value)} value={period}>
			<option value="long_term">All time</option>
			<option value="medium_term">6 months</option>
			<option value="short_term">4 weeks</option>
		</select>
	)
}

export default TimePeriodFilter;