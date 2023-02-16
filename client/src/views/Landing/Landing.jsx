import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
	const navigate = useNavigate();

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
