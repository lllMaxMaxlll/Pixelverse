import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Pagination.module.css";

const Pagination = ({ videogames }) => {
	// Local state for save current page
	const [currentPage, setCurrentPage] = useState(1);
	// Set limit of cards for page
	const itemsPerPage = 15;
	// Calculate total of pages
	const totalPages = Math.ceil(videogames.length / itemsPerPage);

	const active = {
		color: "red",
	};

	const getPageNumbers = (totalPages, currentPage) => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			let className = "";
			if (currentPage === i) {
				className = style.active;
			}
			pageNumbers.push(
				<button key={i} onClick={() => setCurrentPage(i)} className={className}>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = videogames.slice(startIndex, endIndex);

	const currentVideogames = currentItems.map((game) => {
		return (
			<Card
				key={game.id}
				id={game.id}
				name={game.name}
				background_image={game.background_image}
				rating={game.rating}
				genres={game.genres}
				created={game.created}
			/>
		);
	});

	return (
		<div className={style.container}>
			<div className={style.buttonPag}>{getPageNumbers(totalPages, currentPage)}</div>
			<div className={style.cardsContainer}>{currentVideogames}</div>
		</div>
	);
};

export default Pagination;
