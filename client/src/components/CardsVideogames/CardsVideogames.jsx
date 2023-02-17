import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsVideogames.module.css";

const Videogames = () => {
	// Get games from store redux
	const videogames = useSelector((state) => state.allVideogames);
	const allVideogames = videogames.map((game) => {
		return (
			<Card
				key={game.id}
				id={game.id}
				name={game.name}
				image={game.background_image}
				rating={game.rating}
				genres={game.genres}
			/>
		);
	});

	return <div className={style.cardsContainer}>{allVideogames}</div>;
};
export default Videogames;
