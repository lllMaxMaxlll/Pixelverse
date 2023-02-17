import { GET_VIDEOGAMES, GET_GENRES, GET_DETAIL } from "./actions";

const initialState = {
	// Use videogames array for filter/sorted
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
		default:
			return state;
	}
};

export default rootReducer;
