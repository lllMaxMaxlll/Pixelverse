import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Filters } from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import style from "./CardsVideogames.module.css";

const CardsVideogames = () => {
	// Get games from store redux
	const videogames = useSelector((state) => state.allVideogames);

	return (
		<div>
			<SearchBar />
			<Filters />
			<Pagination videogames={videogames} />
		</div>
	);
};
export default CardsVideogames;
