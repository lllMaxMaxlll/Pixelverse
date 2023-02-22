import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames, getVideogamesByName } from "../../redux/actions";

const SearchBar = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSearch = (text) => {
		// If no name, get all
		if (!text) dispatch(getVideogames());
		// Dispatch with name from state
		dispatch(getVideogamesByName(text));
	};

	return (
		<div>
			<input
				value={text}
				key='text'
				type='text'
				placeholder='Search by name'
				onChange={handleChange}
			/>
			<button
				onClick={() => {
					handleSearch(text);
					setText("");
				}}>
				Search
			</button>
			<button
				onClick={() => {
					handleSearch();
					setText("");
				}}>
				All Games
			</button>
		</div>
	);
};

export default SearchBar;
