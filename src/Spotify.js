class Spotify {
	
	constructor(token) {
		this.token = token;
	}

	getAlbum(id) {
		return this.get(`https://api.spotify.com/v1/albums/${id}`)
			.then(res => res.json());
	}

	search(query, type) {
		return this.get(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
			.then(res => res.json())
	}

	next() {
		return this.post('https://api.spotify.com/v1/me/player/next');
	}

	previous() {
		return this.post('https://api.spotify.com/v1/me/player/previous');
	}

	play() {
		return this.put('https://api.spotify.com/v1/me/player/play');
	}

	pause() {
		return this.put('https://api.spotify.com/v1/me/player/pause')
	}

	getPlaylist(id) {
		return this.get(`https://api.spotify.com/v1/playlists/${id}`)
				.then(res => res.json())
	}

	getArtist(id) {
		return this.get(`https://api.spotify.com/v1/artists/${id}`)
			.then(res => res.json())
	}

	getArtistTopTracks(id) {
		return this.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=GB`)
				.then(res => res.json())
	}

	getArtistRelatedArtists(id) {
		return this.get(`https://api.spotify.com/v1/artists/${id}/related-artists`)
				.then(res => res.json())
	}

	getSongsForPlaylist(id) {
		return this.get(`https://api.spotify.com/v1/playlists/${id}/tracks`)
			.then(res => res.json())
	}

	getAllPlaylists() {
		return this.get('https://api.spotify.com/v1/me/playlists')
				.then(res => res.json())
	}

	getCurrentlyPlaying() {
		return this.get('https://api.spotify.com/v1/me/player/currently-playing')
			.then(res => res.json())
	}

	getRecentlyPlayed() {
		return this.get('https://api.spotify.com/v1/me/player/recently-played')
			.then(res => res.json())
	}

	changeVolume(newVolume) {
		console.log(newVolume);
		return this.put(`https://api.spotify.com/v1/me/player/volume?volume_percent=${newVolume}`);
	}

	post(url, options = {}) {
		return this.makeRequest(url, {
			...options,
			method: "POST"
		});
	}

	put(url, options = {}) {
		return this.makeRequest(url, {
			...options,
			method: 'PUT'
		});
	}

	get(url, options = {}) {
		return this.makeRequest(url, {
			...options,
			method: 'GET'
		});
	}

	makeRequest(url, options = {}) {
		const defaultParameters = {
			headers: {
                'Authorization': `Bearer ${this.token}`
            }
		};

		return fetch(url, {
			...options,
			...defaultParameters
		});
	}
}

export default Spotify;