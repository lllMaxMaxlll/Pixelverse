import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showAllGames, getVideogamesByName } from "../../redux/actions";
import style from "./SearchBar.module.css";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSearch = (text) => {
		setLoading(true);
		// If no name, recover all
		if (text === undefined || !text) {
			dispatch(showAllGames());
			setLoading(false);
			return;
		}
		// Dispatch with name from state
		dispatch(getVideogamesByName(text)).then(() => setLoading(false));
		setText("");
	};

	return (
		<div className={style.searchContainer}>
			<div className={style.formGroup}>
				<input
					className={style.formField}
					value={text}
					key='text'
					type='text'
					placeholder='Search by name'
					onChange={handleChange}
				/>
				<label className={style.formLabel}>Search by name</label>
				{loading ? <div className={style.loader}></div> : false}
				<RiSearchLine
					className={style.searchButton}
					disabled={!text}
					onClick={() => handleSearch(text)}
				/>
			</div>
			<div className={style.buttonsContainer}>
				<button
					disabled={!text}
					onClick={() => {
						handleSearch(text);
					}}>
					Search
				</button>
				<button
					onClick={() => {
						handleSearch();
					}}>
					All Games
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
