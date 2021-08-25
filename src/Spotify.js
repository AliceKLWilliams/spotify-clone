class Spotify {
	
	constructor(token) {
		this.token = token;
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

	getAllPlaylists() {
		return this.get('https://api.spotify.com/v1/me/playlists')
				.then(res => res.json())
	}

	getCurrentlyPlaying() {
		return this.get('https://api.spotify.com/v1/me/player/currently-playing')
			.then(res => res.json())
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