import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideogames, loadDone } from "../../redux/actions";

const Landing = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Save api info to store and change Loader when is done!
	useEffect(() => {
		dispatch(getVideogames()).then(() => dispatch(loadDone()));
	}, []);

	return (
		<div>
			<h1>Videogames App</h1>
			<h1>Landing Page</h1>
			<div>
				<button onClick={() => navigate("/home")}>Touch me for start!</button>
			</div>
		</div>
	);
};
export default Landing;
