require("dotenv").config();
const axios = require("axios");
const { URL, API_KEY } = process.env;
const { Videogame, Genre, Platform } = require("../../db");
const { cleanGame } = require("./getGamesFN");

// Find game with ID in DB
const findID_DB = async (id) => {
	const game = await Videogame.findByPk(id, {
		include: [
			{
				model: Genre,
				attributes: ["id", "name"],
				through: {
					attributes: [],
				},
			},
			{
				model: Platform,
				attributes: ["id", "name"],
				through: {
					attributes: [],
				},
			},
		],
	});

	if (!game) throw Error("Game not found in Database");

	return game;
};

// Find game with ID in API
const findID_API = async (id) => {
	const game = await axios.get(`${URL}/games/${id}?key=${API_KEY}`);
	return cleanGame(game.data);
};

module.exports = { findID_API, findID_DB };
