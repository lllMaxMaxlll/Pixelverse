import { GET_VIDEOGAMES, GET_GENRES } from "./actions";

const initialState = {
	// Usar esta copia para el filtrado/orden
	videogames: [],
	allVideogames: [],
	allGenres: [],
	videogameDetail: [],
	// allPlatforms: [],
	// myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_VIDEOGAMES:
			return {
				...state,
				allVideogames: payload,
			};
		case GET_GENRES:
			return {
				...state,
				allGenres: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
