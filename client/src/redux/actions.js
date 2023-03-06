import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_BY_NAME = "GET_VIDEOGAMES_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAIL = "GET_DETAIL";
export const POST_GAME = "POST_GAME";
export const LOAD_DONE = "LOAD_DONE";
export const LOAD_WAIT = "LOAD_WAIT";
export const SHOW_ALL = "SHOW_ALL";
export const CLEAN_ID = "CLEAN_ID";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_NAME = "ORDER_NAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const DELETE_GAME = "DELETE_GAME";
export const ADD_GAME = "ADD_GAME";
export const ORDER_RATING = "ORDER_RATING";
export const SET_PAGE = "SET_PAGE";

// Save videogames from API to store
export const getVideogames = () => {
	return async (dispatch) => {
		try {
			// Get all
			const apiData = await axios.get("/videogames");
			return dispatch({ type: GET_VIDEOGAMES, payload: apiData.data });
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

// Get videogames by name
export const getVideogamesByName = (name) => {
	return async (dispatch) => {
		try {
			// Search by name
			const apiDataName = await axios.get(`/videogames?name=${name}`);
			return dispatch({ type: GET_VIDEOGAMES_BY_NAME, payload: apiDataName.data });
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

// Save genres from API to store
export const getGenres = () => {
	return async (dispatch) => {
		const apiData = await axios.get("/genres");
		const genres = apiData.data;
		dispatch({ type: GET_GENRES, payload: genres });
	};
};

// Save platforms from API to store
export const getPlatforms = () => {
	return async (dispatch) => {
		const apiData = await axios.get("/platforms");
		const platforms = apiData.data;
		dispatch({ type: GET_PLATFORMS, payload: platforms });
	};
};

// Save videogame for ID from API to store
export const getDetail = (id) => {
	return async (dispatch) => {
		try {
			const apiData = await axios.get(`/videogame/${id}`);
			const videogame = apiData.data;
			// Convert array to string
			videogame.genres = videogame.genres.map((g) => g.name).join(" - ");
			videogame.platforms = videogame.platforms.map((p) => p.name).join(" - ");
			dispatch({ type: GET_DETAIL, payload: videogame });
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

// Post new game
export const postVideogame = (newGame) => {
	return async () => {
		try {
			const videogame = await axios.post("/videogames", newGame);
			alert("Game created");
			return videogame.data;
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

// Delete from DB only videogame created
export const deleteVideogameCreated = (id) => {
	return async () => {
		try {
			await axios.delete(`/videogame/${id}`).then((res) => alert(res.data));
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

// Restore all games from backup
export const showAllGames = () => {
	return { type: SHOW_ALL, payload: true };
};

// When is loading
export const loading = () => {
	return { type: LOAD_WAIT, payload: false };
};

// When load is done
export const loadDone = () => {
	return { type: LOAD_DONE, payload: true };
};

// For unmount Detail ID
export const cleanID = () => {
	return { type: CLEAN_ID };
};

// To filter videogames to genres
export const filterGenre = (genre) => {
	return { type: FILTER_GENRE, payload: genre };
};

// To filter videogames created
export const filterCreated = (genre) => {
	return { type: FILTER_CREATED, payload: genre };
};

// To order videogames by name ASC or DESC
export const orderName = (order) => {
	return { type: ORDER_NAME, payload: order };
};

// To order videogames by rating
export const orderRating = (order) => {
	return { type: ORDER_RATING, payload: order };
};

// To delete game created from store
export const deleteGame = (id) => {
	return { type: DELETE_GAME, payload: id };
};

// To push game created to store
export const addGame = (game) => {
	console.log("en el actions");
	return { type: ADD_GAME, payload: game };
};

// To set current page number
export const setCurrentPage = (page) => {
	return { type: SET_PAGE, payload: page };
};
