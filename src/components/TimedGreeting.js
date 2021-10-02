import React from 'react';
import dayjs from 'dayjs';


const TimedGreeting = () => {
	let today = new dayjs();
	let currentHour = today.hour();

	let greeting = 'morning';
	if(currentHour > 12 && currentHour < 17) {
		greeting = 'afternoon'
	} else if (currentHour >= 17) {
		greeting = 'evening';
	}

	return <h1 className="font-bold text-4xl mb-12">Good {greeting}</h1>
}

export default TimedGreeting;