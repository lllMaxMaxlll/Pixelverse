import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames, loadDone } from "../../redux/actions";
import style from "./Landing.module.css";

const Landing = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const videogames = useSelector((state) => state.allVideogames);

	// Getting data in landing
	// Save api info to store and change Loader when is done!
	useEffect(() => {
		dispatch(getVideogames()).then(() => dispatch(loadDone()));
		dispatch(getGenres());
	}, []);

	return (
		<div className={style.container}>
			<h1>Videogames App</h1>
			<h1>Landing Page</h1>
			<div>
				<button onClick={() => navigate("/home")}>Touch me for start!</button>
			</div>
		</div>
	);
};
export default Landing;