const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;

const get100Games = async () => {
	let api = await axios.get(`${URL}/games?key=${API_KEY}`);
	let games = [];
	for (let i = 0; i < 1; i++) {
		games.push(...api.data.results);
		api = await axios.get(api.data.next);
		i++;
	}
	return games;
};

// Create new Array with results of API and DB games

// Cleaning info to show in all videogames cards
const cleanDataGames = (apiGames) => {
	return apiGames.map((G) => {
		return {
			id: G.id,
			name: G.name,
			background_image: G.background_image,
			// released: G.released,
			rating: G.rating,
			// platforms: G.platforms.map((e) => {
			// 	return {
			// 		id: e.platform.id,
			// 		name: e.platform.name,
			// 	};
			// }),
			genres: G.genres.map((e) => {
				return {
					id: e.id,
					name: e.name,
				};
			}),
			created: false,
		};
	});
};

// Clean data of unique game from API
const cleanGame = (game) => {
	return {
		id: game.id,
		name: game.name,
		background_image: game.background_image,
		released: game.released,
		rating: game.rating,
		description: game.description,
		platforms: game.platforms.map((e) => {
			return {
				id: e.platform.id,
				name: e.platform.name,
			};
		}),
		genres: game.genres.map((e) => {
			return {
				id: e.id,
				name: e.name,
			};
		}),
		created: false,
	};
};

module.exports = { cleanDataGames, get100Games, cleanGame };
