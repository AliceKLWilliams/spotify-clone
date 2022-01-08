import { useContext, useState } from "react";
import SpotifyContext from "../contexts/SpotifyContext";

/**
 * Custom hook to get the next batch of items from the Spotify API
 *
 * @param {string} key The object attribute we can use to access the items and next link
 * 
 * @returns Array containing:
 * 	- The items
 * 	- A function to the set the items
 *  - A function to set the next link
 *  - The load more function
 */
function useGetNextBatch(key) {
	let [items, setItems] = useState([]);
	let [nextLink, setNextLink] = useState(null);
	const spotify = useContext(SpotifyContext);

	const loadMore = () => {
		if (!nextLink) {
			return Promise.resolve();
		}

		return spotify.get(nextLink)
				.then(res => res.json())
				.then(result => {
					setItems(prevItems => prevItems.concat(result[key].items));
					setNextLink(result[key].next);
				});
	}

	return [items, setItems, setNextLink, loadMore];
}

export default useGetNextBatch;