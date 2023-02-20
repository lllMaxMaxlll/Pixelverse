import React, { useState } from "react";

const SearchBar = () => {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSearch = (text) => {
		// Dispatch con el text para buscarlo en la api
	};

	// Podes hacer que cada vez que se cambie el valor del text
	// Con el useEffect() usando como array de dependencia el text
	// Se cambie y pida a la api con cada letra que cambiemos

	// O podes hacer el dispatch a la api cuando solo se toque el boton

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
				}}></button>
		</div>
	);
};

export default SearchBar;
