import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import style from "./CardsVideogames.module.css";

const Videogames = () => {
	// Get games from store redux
	const videogames = useSelector((state) => state.allVideogames);

	return (
		<div>
			<Pagination videogames={videogames} />
		</div>
	);
};
export default Videogames;
