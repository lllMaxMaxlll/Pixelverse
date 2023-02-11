require("dotenv").config();
const axios = require("axios");
const { Videogame } = require("../../db");
const { Op } = require("sequelize");
const { URL, API_KEY } = process.env;
const { mapGames, get100Games } = require("./getGamesFN");

// Games from Database and API by name
const gamesByName = async (name) => {
	// Get all games from Database by name
	const dbGames = await Videogame.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
	// Get all games from API by name
	const apiGames = await axios.get(`${URL}/games?key=${API_KEY}&search=${name}`);
	// Mapping api games
	const games = mapGames(apiGames.data.results);

	// If no results
	if (!games.length) throw Error("Games not found");

	// Only 15 results
	const allGames = dbGames.concat(games).slice(0, 15);

	return allGames;
};

// Games from Database and API
const getAllGames = async () => {
	// Get all games from Database
	const dbGames = await Videogame.findAll();

	// Get first 100 games from API
	let apiGames = await get100Games();

	// Creating new array with games
	const games = await mapGames(apiGames);

	const allGames = dbGames.concat(games);

	// If no results
	if (!allGames.length) throw Error("Games not found");

	return allGames;
};

module.exports = { gamesByName, getAllGames };
