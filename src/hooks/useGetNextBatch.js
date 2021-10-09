import { useContext, useState } from "react";
import SpotifyContext from "../contexts/SpotifyContext";

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