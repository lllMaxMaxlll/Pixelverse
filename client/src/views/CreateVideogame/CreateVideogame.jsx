import React, { useState } from "react";
import axios from "axios";
import style from "./CreateVideogame.module.css";
const CreateVideogame = () => {
	const [newGame, setNewGame] = useState({
		name: "",
		description: "",
		imageURL: "",
		released: "",
		genres: [],
		platforms: [],
	});

	const [errors, setErrors] = useState({
		name: "",
		description: "",
		released: "",
		genres: "",
		platforms: "",
	});

	// Set property of videogame in any input change
	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		// Validate value of input
		validate({ ...newGame, [property]: value });
		// Set input to state
		setNewGame({ ...newGame, [property]: value });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		// En el submit hacemos el post a la url local, y el segundo argumento es el objeto a mandar
		const response = axios
			.post("URL", newGame)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const validate = (newGame) => {
		// Deberia validar con regex los inputs para que sean del tipo correcto
		// if(nameregex.test(newGame.name)) {
		// setErrors({...errors, name: 'Debe ser un nombre valido'})
		// }
	};

	return (
		<div className={style.container}>
			<h1>CreateVideogame</h1>
			<form onSubmit={submitHandler}>
				<label>Name:</label>
				<input type='text' onChange={handleChange} name='name' value={newGame.name} />
				<label>Description:</label>
				<input type='text' onChange={handleChange} name='description' value={newGame.description} />
				<label>Image URL:</label>
				<input type='url' onChange={handleChange} name='imageURL' value={newGame.imageURL} />
				<label>Released date:</label>
				<input type='date' onChange={handleChange} name='released' value={newGame.released} />
				<label>Genres:</label>
				<input type='text' onChange={handleChange} name='genres' value={newGame.genres} />
				<label>Platforms:</label>
				<input type='text' onChange={handleChange} name='platforms' value={newGame.platforms} />
				<label>Rating:</label>
				<input type='number' id='rating' name='rating' min='0.0' max='5.0'></input>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
export default CreateVideogame;
