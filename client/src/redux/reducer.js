import {
	GET_VIDEOGAMES,
	GET_GENRES,
	GET_DETAIL,
	LOAD_DONE,
	LOAD_WAIT,
	CLEAN_ID,
	FILTER_GENRE,
	ORDER_NAME,
	ORDER_RATING,
	GET_PLATFORMS,
	DELETE_GAME,
	FILTER_CREATED,
	POST_GAME,
	SHOW_ALL,
	GET_VIDEOGAMES_BY_NAME,
	SET_PAGE,
	ADD_GAME,
} from "./actions";

const initialState = {
	// Use videogames array for filter/sorted
	videogames: [],
	allVideogames: [],
	allGenres: [],
	videogameDetail: [],
	isLoading: true,
	allPlatforms: [],
	currentPage: 1,
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

		case GET_VIDEOGAMES_BY_NAME:
			return {
				...state,
				allVideogames: payload,
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

		case POST_GAME:
			return {
				...state,
				videogames: [...state.videogames].unshift(payload),
				allVideogames: [...state.allVideogames].unshift(payload),
			};

		case GET_DETAIL:
			return {
				...state,
				videogameDetail: payload,
			};

		case SHOW_ALL:
			return {
				...state,
				allVideogames: [...state.videogames],
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

		case FILTER_GENRE:
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

		case FILTER_CREATED:
			let filteredCreated = [...state.videogames];
			if (payload === "created") {
				filteredCreated = [...state.videogames].filter((g) => g.created);
			}
			if (payload === "notCreated") {
				filteredCreated = [...state.videogames].filter((g) => !g.created);
			}
			return {
				...state,
				allVideogames: filteredCreated,
			};

		case ORDER_NAME:
			let orderName = [...state.allVideogames];
			if (payload === "a-z") {
				orderName.sort((a, b) => {
					if (a.name > b.name) return 1;
					if (a.name < b.name) return -1;
					return 0;
				});
			} else {
				orderName.sort((a, b) => {
					if (a.name < b.name) return 1;
					if (a.name > b.name) return -1;
					return 0;
				});
			}
			return {
				...state,
				allVideogames: orderName,
			};

		case ORDER_RATING:
			let orderRating = [...state.allVideogames];
			if (payload === "0-5") {
				orderRating.sort((a, b) => {
					if (a.rating > b.rating) return 1;
					if (a.rating < b.rating) return -1;
					return 0;
				});
			} else {
				orderRating.sort((a, b) => {
					if (a.rating < b.rating) return 1;
					if (a.rating > b.rating) return -1;
					return 0;
				});
			}
			return {
				...state,
				allVideogames: orderRating,
			};

		case DELETE_GAME:
			let filtered = state.allVideogames.filter((G) => G.id !== payload);
			return {
				...state,
				allVideogames: filtered,
				videogames: filtered,
			};

		case ADD_GAME:
			state.allVideogames.unshift(payload);
			return {
				...state,
				videogames: [...state.allVideogames],
			};

		case SET_PAGE:
			return {
				...state,
				currentPage: payload,
			};

		default:
			return state;
	}
};

export default rootReducer;
