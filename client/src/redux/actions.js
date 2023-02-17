import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAIL = "GET_DETAIL";
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
