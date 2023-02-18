import { GET_VIDEOGAMES, GET_GENRES, GET_DETAIL, LOAD_DONE, LOAD_WAIT } from "./actions";

const initialState = {
	// Use videogames array for filter/sorted
	videogames: [],
	allVideogames: [],
	allGenres: [],
	videogameDetail: [],
	isLoading: true,
	// allPlatforms: [],
	// myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_VIDEOGAMES:
			return {
				...state,
				allVideogames: payload,
				videogames: payload,
			};
		case GET_GENRES:
			return {
				...state,
				allGenres: payload,
			};
		case GET_DETAIL:
			return {
				...state,
				videogameDetail: payload,
			};
		case LOAD_WAIT:
			return {
				...state,
				isLoading: true,
			};
		case LOAD_DONE:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default rootReducer;
