class HTTP {
	delete(url, options = {}) {
		return this.makeRequest(url, {
			...options,
			method: "DELETE"
		});
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
		return fetch(url, options);
	}
}

export default HTTP;