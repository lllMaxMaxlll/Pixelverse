import {
	GET_VIDEOGAMES,
	GET_GENRES,
	GET_DETAIL,
	LOAD_DONE,
	LOAD_WAIT,
	CLEAN_ID,
	ORDER_GENRE,
	ORDER_NAME,
	GET_PLATFORMS,
} from "./actions";

const initialState = {
	// Use videogames array for filter/sorted
	videogames: [],
	allVideogames: [],
	allGenres: [],
	videogameDetail: [],
	isLoading: true,
	allPlatforms: [],
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
		case GET_PLATFORMS:
			return {
				...state,
				allPlatforms: payload,
			};

		case GET_DETAIL:
			return {
				...state,
				videogameDetail: payload,
			};
		case CLEAN_ID:
			return {
				...state,
				videogameDetail: [],
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

		case ORDER_GENRE:
			let filteredVideogames =
				payload === "All"
					? [...state.videogames]
					: [...state.videogames].filter((game) =>
							game.genres.map((g) => g.name).includes(payload)
					  );
			return {
				...state,
				allVideogames: filteredVideogames,
			};

		case ORDER_NAME:
			let ordered = [...state.allVideogames];
			if (payload === "asc") {
				ordered.sort((a, b) => {
					if (a.name > b.name) return 1;
					if (a.name < b.name) return -1;
					return 0;
				});
			} else {
				ordered.sort((a, b) => {
					if (a.name < b.name) return 1;
					if (a.name > b.name) return -1;
					return 0;
				});
			}
			return {
				...state,
				allVideogames: ordered,
			};
		default:
			return state;
	}
};

export default rootReducer;
