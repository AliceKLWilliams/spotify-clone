import React from 'react';
import dayjs from 'dayjs';
import PageTitle from './typography/PageTitle';


const TimedGreeting = () => {
	let today = new dayjs();
	let currentHour = today.hour();

	let greeting = 'morning';
	if (currentHour > 12 && currentHour < 17) {
		greeting = 'afternoon'
	} else if (currentHour >= 17) {
		greeting = 'evening';
	}

	return <PageTitle>Good {greeting}</PageTitle>;
}

export default TimedGreeting;