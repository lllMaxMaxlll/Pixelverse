import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Videogames App</h1>
			<div className='card'>
				<button onClick={() => navigate("/videogames")}>Touch me for start!</button>
			</div>
		</div>
	);
};
export default Landing;
