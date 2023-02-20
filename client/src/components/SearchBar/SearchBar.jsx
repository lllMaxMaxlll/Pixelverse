import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames, orderName } from "../../redux/actions";

const SearchBar = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSearch = (text) => {
		// Dispatch con el text para buscarlo en la api
		console.log(text);
		console.log(dispatch);
		dispatch(getVideogames(text));
		dispatch(orderName("asc"));
	};

	return (
		<div>
			<input
				value={text}
				key='text'
				type='text'
				placeholder='Search by name'
				// className={styles.input}
				onChange={handleChange}
			/>
			<button
				onClick={() => {
					handleSearch(text);
					setText("");
				}}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
