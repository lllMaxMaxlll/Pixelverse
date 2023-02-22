import React, { useState } from "react";
import Select from "react-select";
import { postVideogame } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./CreateVideogame.module.css";

const CreateVideogame = () => {
	const dispatch = useDispatch();
	const genres = useSelector((state) => state.allGenres);
	const platforms = useSelector((state) => state.allPlatforms);

	const [newVideogame, setNewVideogame] = useState({
		name: "",
		description: "",
		imageURL: "",
		released: "",
		rating: "",
		genres: [],
		platforms: [],
	});

	const genresOptions = genres.map((g) => {
		return { value: g.name, label: g.name };
	});

	const platformsOptions = platforms.map((p) => {
		return { value: p.name, label: p.name };
	});

	const [errors, setErrors] = useState({
		name: "",
		description: "",
		imageURL: "",
		released: "",
		rating: "",
		genres: "",
		platforms: "",
	});

	// Set property of videogame in any input change
	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		// Validate value of input
		setErrors(validate({ ...newVideogame, [property]: value }));
		// Set input to state
		setNewVideogame({ ...newVideogame, [property]: value });
	};

	// Handler for selected genres
	const handleGenres = (event) => {
		let selected = event.map((e) => e.value);
		setNewVideogame({ ...newVideogame, genres: selected });
	};

	// Handler for selected platforms
	const handlePlatforms = (event) => {
		let selected = event.map((e) => e.value);
		setNewVideogame({ ...newVideogame, platforms: selected });
	};

	const submitHandler = (event) => {
		// Prevent a browser reload/refresh
		event.preventDefault();
		// Post to url
		dispatch(postVideogame(newVideogame));
	};

	return (
		<div className={style.container}>
			<h1>CreateVideogame</h1>
			<form onSubmit={submitHandler}>
				<label>Name:</label>
				<input type='text' onChange={handleChange} name='name' value={newVideogame.name} />
				<label>Description:</label>
				<input
					type='text'
					onChange={handleChange}
					name='description'
					value={newVideogame.description}
				/>
				<label>Image URL:</label>
				<input type='url' onChange={handleChange} name='imageURL' value={newVideogame.imageURL} />
				<label>Released date:</label>
				<input type='date' onChange={handleChange} name='released' value={newVideogame.released} />
				<label>Genres:</label>
				<Select
					options={genresOptions}
					isMulti
					closeMenuOnSelect={false}
					name='genres'
					onChange={handleGenres}
				/>
				<label>Platforms:</label>
				<Select
					options={platformsOptions}
					isMulti
					closeMenuOnSelect={false}
					name='platforms'
					onChange={handlePlatforms}
				/>
				<label>Rating:</label>
				<input type='number' id='rating' name='rating' min='0.0' max='5.0'></input>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
export default CreateVideogame;
