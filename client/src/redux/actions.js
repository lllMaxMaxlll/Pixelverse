import axios from "axios";

const URL = "http://localhost:3001";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAIL = "GET_DETAIL";
export const LOAD_DONE = "LOAD_DONE";
export const LOAD_WAIT = "LOAD_WAIT";
export const CLEAN_ID = "CLEAN_ID";
export const ORDER_GENRE = "ORDER_GENRE";
export const ORDER_NAME = "ORDER_NAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const DELETE_GAME = "DELETE_GAME";

// Save videogames from API to store
export const getVideogames = (name) => {
	return async (dispatch) => {
		// If have name to search
		if (name) {
			const apiDataName = await axios.get(`${URL}/videogames?name=${name}`);
			dispatch({ type: GET_VIDEOGAMES, payload: apiDataName.data });
			return;
		}
		// If no name, get all
		const apiData = await axios.get(`${URL}/videogames`);
		dispatch({ type: GET_VIDEOGAMES, payload: apiData.data });
	};
};

// Save genres from API to store
export const getGenres = () => {
	return async (dispatch) => {
		const apiData = await axios.get(`${URL}/genres`);
		const genres = apiData.data;
		dispatch({ type: GET_GENRES, payload: genres });
	};
};

// Save platforms from API to store
export const getPlatforms = () => {
	return async (dispatch) => {
		const apiData = await axios.get(`${URL}/platforms`);
		const platforms = apiData.data;
		dispatch({ type: GET_PLATFORMS, payload: platforms });
	};
};

// Save videogame for ID from API to store
export const getDetail = (id) => {
	return async (dispatch) => {
		const apiData = await axios.get(`${URL}/videogame/${id}`);
		const videogame = apiData.data;
		// Convert array to string
		videogame.genres = videogame.genres.map((g) => g.name).join(" - ");
		videogame.platforms = videogame.platforms.map((p) => p.name).join(" - ");
		dispatch({ type: GET_DETAIL, payload: videogame });
	};
};

// Post new game
export const postVideogame = (newGame) => {
	return async (dispatch) => {
		const post = await axios
			.post(`${URL}/videogames`, newGame)
			.then((res) => alert(res.data))
			.catch((err) => alert(err.response.data.error));
		return post;
	};
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
	return { type: CLEAN_ID, payload: true };
};

// To order videogames to genres
export const orderGenre = (genre) => {
	return { type: ORDER_GENRE, payload: genre };
};

// To order videogames by name ASC or DESC
export const orderName = (order) => {
	return { type: ORDER_NAME, payload: order };
};

//
export const deleteGame = (id) => {
	return { type: DELETE_GAME, payload: id };
};
