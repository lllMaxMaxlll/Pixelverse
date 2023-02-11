const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
	// Obtener todos los tipos de géneros de videojuegos posibles
	// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
	res.send("Devuelve los genres");
});

module.exports = router;
