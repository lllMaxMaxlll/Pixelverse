import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsVideogames.module.css";

const Videogames = (props) => {
	const videogames = useSelector((state) => state.allVideogames);
	// Deberia guardar la data de la api en una variable
	// deberia hacer el dispatch de saveApiGames con la data de la api, para que la guarde en el array de la store

	return (
		<div className={style.cardsContainer}>
			{videogames.map((game) => {
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
			})}
		</div>
	);
};
export default Videogames;
