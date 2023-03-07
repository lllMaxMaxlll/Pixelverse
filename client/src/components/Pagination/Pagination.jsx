import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Pagination.module.css";

const Pagination = ({ videogames }) => {
	const currentPage = useSelector((state) => state.currentPage);
	const dispatch = useDispatch();

	// Set limit of cards for page
	const itemsPerPage = 15;
	// // Calculate total of pages
	const totalPages = Math.ceil(videogames.length / itemsPerPage);
	// Plus one to currentPage
	const nextPage = () => dispatch(setCurrentPage(currentPage + 1));
	// Subtract one to currentPage
	const prevPage = () => dispatch(setCurrentPage(currentPage - 1));

	// Cut videogames array to show only current page
	const getCurrentPageData = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return videogames.slice(startIndex, endIndex);
	};

	// Render all pages buttons
	const getPageNumbers = (totalPages) => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => dispatch(setCurrentPage(i))}
					className={i === currentPage ? style.active : ""}>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};

	const currentPageData = getCurrentPageData();

	// Render cards from currentPage
	const currentVideogames = currentPageData.map((game) => {
		return (
			<Card
				key={`${game.name} ${game.rating}`}
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
			<div className={style.buttonPag}>
				<button onClick={prevPage} disabled={currentPage === 1}>
					Prev
				</button>
				{getPageNumbers(totalPages)}
				<button onClick={nextPage} disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
			<div className={style.cardsContainer}>{currentVideogames}</div>
		</div>
	);
};

export default Pagination;
