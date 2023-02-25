import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, getVideogames, loadDone } from "../../redux/actions";
import style from "./Landing.module.css";
import { LandingBg } from "../../components/LandingBg/LandingBg";

const Landing = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const videogames = useSelector((state) => state.allVideogames);

	// Getting data in landing
	// Save api info to store and change Loader when is done!
	useEffect(() => {
		dispatch(getVideogames()).then(() => dispatch(loadDone()));
		dispatch(getGenres());
		dispatch(getPlatforms());
	}, []);

	return (
		<div className={style.container}>
			<h1>PIXELVERSE</h1>
			<div>
				<button onClick={() => navigate("/home")}>Touch me for start!</button>
			</div>
		</div>
	);
};

export default Landing;
