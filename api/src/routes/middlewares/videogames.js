const { Router } = require("express");
const router = Router();
const {
	gamesByName,
	getAllGames,
} = require("../controllers/videogamesControllers");

router.get("/", async (req, res) => {
	// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter

	const { name } = req.query;

	try {
		// Si recibe el name por query lo buscamos, sino mandamos todo
		const games = name ? await gamesByName(name) : await getAllGames();
		res.status(200).json(games);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}

	res.send("Tiene que devolver un listado de los videojuegos");
});

router.post("/", async (req, res) => {
	// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
	// Crea un videojuego en la base de datos, relacionado a sus géneros.

	res.send("Crea videogame");
});

module.exports = router;
