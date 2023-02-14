const { Router } = require("express");
// Import routers;
const videogamesRouter = require("./middlewares/videogames");
const videogameRouter = require("./middlewares/videogame");
const genresRouter = require("./middlewares/genres");
const platformsRouter = require("./middlewares/platforms");

const router = Router();

// Redirect to middlewares
router.use("/videogame", videogameRouter);
router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);
router.use("/platforms", platformsRouter);

module.exports = router;
