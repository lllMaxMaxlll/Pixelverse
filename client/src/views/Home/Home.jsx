import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Videogames from "../../components/CardsVideogames/CardsVideogames";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getVideogames());
	}, []);

	return (
		<div>
			Home
			<p>Search</p>
			<input />
			<Videogames />
		</div>
	);
};

export default Home;
