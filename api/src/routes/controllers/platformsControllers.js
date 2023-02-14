const { Platform } = require("../../db");
const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;

const getPlatforms = async () => {
	// All platforms from API
	let apiPlatforms = await axios.get(`${URL}/platforms?key=${API_KEY}`);
	apiPlatforms = apiPlatforms.data.results;
	// Add to DB if not exits
	apiPlatforms.forEach(async (G) => await Platform.findOrCreate({ where: { name: G.name } }));
	return await Platform.findAll();
};

module.exports = { getPlatforms };
