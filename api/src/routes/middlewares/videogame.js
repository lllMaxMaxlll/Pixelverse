const { Router } = require("express");
const router = Router();

router.get("/:id", async (req, res) => {
	// Obtener el detalle de un videojuego en particular
	// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
	// Incluir los géneros asociados

	// Para diferenciar de un ID de la API y uno de la base de datos (UUID)
	// Podes preguntar si el params ID es Nan
	// const source = isNan(id) ? 'bdd' : 'api';

	// getUserById(id, source)

	// const { id } = req.params;
	res.send("Devuelve game por id");
});

module.exports = router;
