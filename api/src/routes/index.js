const { Router } = require("express");
// Import routers;
const videogamesRouter = require("./middlewares/videogames");
const videogameRouter = require("./middlewares/videogame");
const genresRouter = require("./middlewares/genres");

const router = Router();

// Redirect to middlewares
router.use("/videogame", videogameRouter);
router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);

module.exports = router;
