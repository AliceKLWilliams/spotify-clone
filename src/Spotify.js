import HTTP from "./api/HTTP";

class Spotify extends HTTP {
	
	constructor(token) {
		super();

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

	setShuffle(newState) {
		return this.put(`https://api.spotify.com/v1/me/player/shuffle?state=${newState}`);
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

	getPlaybackState() {
		return this.get('https://api.spotify.com/v1/me/player')
				.then(res => res.json());
	}

	getCurrentUserProfile() {
		return this.get('https://api.spotify.com/v1/me')
				.then(res => res.json())
	}

	getLikedSongs() {
		return this.get('https://api.spotify.com/v1/me/tracks?limit=50')
			.then(res => res.json())
	}

	getAllGenres() {
		return this.get('https://api.spotify.com/v1/browse/categories?limit=50&country=GB')
			.then(res => res.json())
	}

	getGenre(ID) {
		return this.get(`https://api.spotify.com/v1/browse/categories/${ID}`)
			.then(res => res.json());
	}

	getPlaylistsForGenre(genreID) {
		return this.get(`https://api.spotify.com/v1/browse/categories/${genreID}/playlists?limit=50`)
			.then(res => res.json())
	}

	setRepeatState(newState) {
		return this.put(`https://api.spotify.com/v1/me/player/repeat?state=${newState}`);
	}

	setTrackPosition(positionMs) {
		return this.put(`https://api.spotify.com/v1/me/player/seek?position_ms=${positionMs}`)
	}

	getRecentlyPlayed() {
		return this.get('https://api.spotify.com/v1/me/player/recently-played')
			.then(res => res.json())
	}

	changeVolume(newVolume) {
		return this.put(`https://api.spotify.com/v1/me/player/volume?volume_percent=${newVolume}`);
	}

	getDevices() {
		return this.get('https://api.spotify.com/v1/me/player/devices')
			.then(res => res.json())
	}

	setDevice(id) {
		return this.put('https://api.spotify.com/v1/me/player', {
			body: JSON.stringify({
				'device_ids': [id]
			})
		});
	}

	getTopTracks(args) {
		return this.getTopResults({
			type: 'tracks',
			...args
		});
	}
	
	getTopArtists(args) {
		return this.getTopResults({
			type: 'artists',
			...args
		});
	}

	getTopResults({type, limit, timeRange}) {
		if(limit > 50 || limit < 1) {
			limit = 20;
		}

		return this.get(`https://api.spotify.com/v1/me/top/${type}?limit=${limit}&time_range=${timeRange}`)
			.then(res => res.json())
	}

	unsaveTrack(id) {
		return this.delete(`https://api.spotify.com/v1/me/tracks?ids=${id}`);
	}

	saveTrack(id) {
		return this.put(`https://api.spotify.com/v1/me/tracks?ids=${id}`);
	}

	isTrackSaved(id) {
		return this.get(`https://api.spotify.com/v1/me/tracks/contains?ids=${id}`);
	}

	makeRequest(url, options = {}) {
		const defaultParameters = {
			headers: {
                'Authorization': `Bearer ${this.token}`
            }
		};

		return super.makeRequest(url, {
			...options,
			...defaultParameters
		});
	}
}

export default Spotify;