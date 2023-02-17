import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Videogames from "../../components/CardsVideogames/CardsVideogames";
import Loader from "../../components/Loader/Loader";

const Home = () => {
	const dispatch = useDispatch();
	// State for loader
	const [loading, setLoading] = useState(true);

	// When mount, get data from server and save to store
	useEffect(() => {
		dispatch(getVideogames()).then((data) => setLoading(false));
		return () => setLoading(true);
	}, []);

	return <div>{loading ? <Loader /> : <Videogames />}</div>;
};

export default Home;
