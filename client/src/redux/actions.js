import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAIL = "GET_DETAIL";
export const LOAD_DONE = "LOAD_DONE";
export const LOAD_WAIT = "LOAD_WAIT";
export const CLEAN_ID = "CLEAN_ID";
export const ORDER_GENRE = "ORDER_GENRE";
export const ORDER_NAME = "ORDER_NAME";
// export const GET_PLATFORMS = "GET_PLATFORMS";

// Save videogames from API to store
export const getVideogames = () => {
	return async (dispatch) => {
		const apiData = await axios.get("http://localhost:3001/videogames");
		const videogames = apiData.data;
		dispatch({ type: GET_VIDEOGAMES, payload: videogames });
	};
};

// Save genres from API to store
export const getGenres = () => {
	return async (dispatch) => {
		const apiData = await axios.get("http://localhost:3001/genres");
		const genres = apiData.data;
		dispatch({ type: GET_GENRES, payload: genres });
	};
};

// Save videogame for ID from API to store
export const getDetail = (id) => {
	return async (dispatch) => {
		const apiData = await axios.get(`http://localhost:3001/videogame/${id}`);
		const videogame = apiData.data;
		// Convert array to string
		videogame.genres = videogame.genres.map((g) => g.name).join(" - ");
		videogame.platforms = videogame.platforms.map((p) => p.name).join(" - ");
		dispatch({ type: GET_DETAIL, payload: videogame });
	};
};

// When is loading
export const loading = () => {
	return (dispatch) => {
		dispatch({ type: LOAD_WAIT, payload: false });
	};
};

// When load is done
export const loadDone = () => {
	return (dispatch) => {
		return dispatch({ type: LOAD_DONE, payload: true });
	};
};

// For unmount Detail ID
export const cleanID = () => {
	return (dispatch) => {
		return dispatch({ type: CLEAN_ID, payload: true });
	};
};

// To order videogames to genres
export const orderGenre = (genre) => {
	return { type: ORDER_GENRE, payload: genre };
};

// To order videogames by name ASC or DESC
export const orderName = (order) => {
	return { type: ORDER_NAME, payload: order };
};
