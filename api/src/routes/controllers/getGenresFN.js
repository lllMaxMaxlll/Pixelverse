const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;

// Get all API genres
const getAPIGenres = async () => {
	const apiGenres = await axios.get(`${URL}/genres?key=${API_KEY}`);
	return apiGenres.data.results;
};

module.exports = getAPIGenres;
