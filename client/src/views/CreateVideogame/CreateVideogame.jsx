import React, { useState } from "react";
import Select from "react-select";
import { postVideogame, loading, loadDone, getVideogames, addGame } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./CreateVideogame.module.css";
import validate from "./validate";
import { useNavigate } from "react-router-dom";

// Cuando hago el create, NO hago el dispatch del GetVideogames(),
// Agrego el juego nuevo a los array del store
// Pero tendria que usar el useEffect para que observe el array de juegos
// Y que si nota algun cambio, vuelva a renderizar
// PD: El post se hace igual solamente que no volvemos a pedir la info al servidor
// por cuestion del tiempo de retraso

const CreateVideogame = () => {
	const dispatch = useDispatch();
	const genres = useSelector((state) => state.allGenres);
	const platforms = useSelector((state) => state.allPlatforms);
	const navigate = useNavigate();

	// Set newVideogame values
	const [newVideogame, setNewVideogame] = useState({
		name: "",
		description: "",
		background_image: "",
		released: "",
		rating: "",
		genres: [],
		platforms: [],
	});

	// Create values for genres input
	const genresOptions = genres.map((g) => {
		return { value: g.name, label: g.name };
	});

	// Create values for platforms input
	const platformsOptions = platforms.map((p) => {
		return { value: p.name, label: p.name };
	});

	// Set errors
	const [errors, setErrors] = useState({
		name: "",
		description: "",
		background_image: "",
		released: "",
		rating: "",
		genres: "",
		platforms: "",
	});

	// Check inputs errors to enable/disable submit
	const isValidForm = Object.values(errors).map((e) => e.valueOf()).length ? true : false;

	// Set property of videogame in any input change
	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setErrors(validate({ ...newVideogame, [property]: value }));
		setNewVideogame({ ...newVideogame, [property]: value });
	};

	// Handler for selected genres
	const handleGenres = (event) => {
		let selected = event.map((e) => e.value);
		setErrors(validate({ ...newVideogame, genres: selected }));
		setNewVideogame({ ...newVideogame, genres: selected });
	};

	// Handler for selected platforms
	const handlePlatforms = (event) => {
		let selected = event.map((e) => e.value);
		setErrors(validate({ ...newVideogame, platforms: selected }));
		setNewVideogame({ ...newVideogame, platforms: selected });
	};

	const submitHandler = async (event) => {
		// Prevent a browser reload/refresh
		event.preventDefault();
		// Push game to store
		dispatch(addGame(newVideogame));
		// Post to url and alert result
		await dispatch(postVideogame(newVideogame));
		// Redirect to home
		navigate("/home");
	};

	return (
		<div className={style.container}>
			<h1>CreateVideogame</h1>
			<form onSubmit={submitHandler}>
				<div className={style.inputContainer}>
					<label className={style.formLabel}>Name:</label>
					<input
						className={style.formField}
						type='text'
						onChange={handleChange}
						name='name'
						value={newVideogame.name}
						minLength='3'
						maxLength='20'
					/>
					{errors.name && (
						<span className={`${style.spanDanger} ${style.spanDangerName}`}>{errors.name}</span>
					)}
				</div>

				<div className={style.inputContainer}>
					<label className={style.formLabel}>Description:</label>
					<textarea
						minLength='10'
						maxLength='250'
						type='text'
						onChange={handleChange}
						name='description'
						value={newVideogame.description}
					/>
					{errors.description && (
						<span className={`${style.spanDanger} ${style.spanDangerDescription}`}>
							{errors.description}
						</span>
					)}
				</div>

				<div className={style.inputContainer}>
					<label className={style.formLabel}>Image URL:</label>
					<input
						className={style.formField}
						type='url'
						onChange={handleChange}
						name='background_image'
						value={newVideogame.background_image}
					/>
					{errors.background_image && (
						<span className={style.spanDanger}>{errors.background_image}</span>
					)}
				</div>

				<div className={style.inputContainer}>
					<label className={style.formLabel}>Released date:</label>
					<input
						type='date'
						onChange={handleChange}
						name='released'
						value={newVideogame.released}
						className={style.formField}
					/>
					{errors.released && <span className={style.spanDanger}>{errors.released}</span>}
				</div>

				<div className={style.inputContainer}>
					<label className={style.formLabel}>Genres:</label>
					<Select
						className={style.select}
						theme={(theme) => ({
							...theme,
							borderRadius: 0,
							colors: {
								...theme.colors,
								primary25: "neutral5",
								primary: "purple",
							},
						})}
						styles={(style) => ({
							...style,
							backgroundColor: "black",
						})}
						options={genresOptions}
						isMulti
						closeMenuOnSelect={false}
						name='genres'
						onChange={handleGenres}
					/>
					{errors.genres && <span className={style.spanDanger}>{errors.genres}</span>}
				</div>
				<div className={style.inputContainer}>
					<label className={style.formLabel}>Platforms:</label>
					<Select
						className={style.select}
						theme={(theme) => ({
							...theme,
							borderRadius: 0,
							colors: {
								...theme.colors,
								primary25: "neutral5",
								primary: "purple",
							},
						})}
						styles={(style) => ({
							...style,
							backgroundColor: "black",
						})}
						options={platformsOptions}
						isMulti
						closeMenuOnSelect={false}
						name='platforms'
						onChange={handlePlatforms}
					/>
					{errors.platforms && <span className={style.spanDanger}>{errors.platforms}</span>}
				</div>
				<div className={style.inputContainer + " " + style.inputRating}>
					<label className={style.formLabel}>Rating:</label>
					<input
						className={style.formField + " " + style.formNumber}
						type='number'
						id='rating'
						name='rating'
						min='1'
						max='5'
						onChange={handleChange}></input>
					{errors.rating && <span className={style.spanDanger}>{errors.rating}</span>}
				</div>
				<button type='submit' disabled={isValidForm}>
					Submit
				</button>
			</form>
		</div>
	);
};
export default CreateVideogame;
