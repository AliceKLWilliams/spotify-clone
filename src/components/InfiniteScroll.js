import React, {useEffect, useState} from 'react';

const InfiniteScroll = ({children, getMoreItems}) => {
	let [shouldFetch, setShouldFetch] = useState(false);


	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
			return;
		}

		setShouldFetch(true);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	useEffect(() => {
		if(!shouldFetch) {
			return;
		}

		getMoreItems();
		setShouldFetch(false);
	}, [shouldFetch, getMoreItems])


	return (
		<>
			{children}
			{shouldFetch ? <p>Loading...</p> : null}
		</>
	)
}

export default InfiniteScroll;