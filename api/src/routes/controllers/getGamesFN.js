const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const get100Games = async () => {
	let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
	let games = [];
	for (let i = 0; i < 5; i++) {
		await games.push(...api.data.results);
		api = await axios.get(api.data.next);
		i++;
	}
	return games;
};

// Create new Array with results of API and DB games
const mapGames = async (apiGames) => {
	const results = await apiGames.map((G) => {
		return {
			id: G.id,
			name: G.name,
			background_image: G.background_image,
			released: G.released,
			rating: G.rating,
			platforms: G.platforms.map((e) => e.platform.name),
			created: false,
		};
	});

	return results;
};

module.exports = { mapGames, get100Games };
