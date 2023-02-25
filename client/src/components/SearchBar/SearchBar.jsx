import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showAllGames, getVideogamesByName } from "../../redux/actions";

const SearchBar = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSearch = (text) => {
		// If no name, recover all
		if (text === undefined) {
			dispatch(showAllGames());
			return;
		}
		// Dispatch with name from state
		dispatch(getVideogamesByName(text));
		setText("");
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
	);
};

export default SearchBar;
