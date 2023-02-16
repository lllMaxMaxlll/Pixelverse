import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>Detail del ID {id}</h1>
			<h2>Mostrarias detalles del videojuego buscado por ID</h2>
			<p>
				<li>Imagen</li>
				<li>Name</li>
				<li>Description</li>
				<li>Released</li>
				<li>Rating</li>
				<li>Platforms</li>
			</p>
		</div>
	);
};

export default Detail;
