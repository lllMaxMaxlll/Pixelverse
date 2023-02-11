require("dotenv").config();
const axios = require("axios");
const { URL, API_KEY } = process.env;
const { Videogame } = require("../../db");

// Find game with ID in DB
const findID_DB = async (id) => {
	const game = await Videogame.findByPk(id);
	if (!game) throw Error("Game not found in Database");
	return game;
};

// Find game with ID in API
const findID_API = async (id) => {
	try {
		const game = await axios.get(`${URL}/games/${id}?key=${API_KEY}`);
		return game.data;
	} catch (error) {
		throw Error("No se encontro en la API");
	}
};

module.exports = { findID_API, findID_DB };
