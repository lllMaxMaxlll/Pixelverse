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

	// If more one page, show it
	const showPages =
		totalPages > 1 ? (
			<p>
				Page {currentPage} of {totalPages}
			</p>
		) : (
			false
		);

	// If no games in array, show h1
	const showCards = currentVideogames.length ? (
		<div className={style.cardsContainer}>{currentVideogames}</div>
	) : (
		<div className={style.nothingHere}>
			<h1>Nothing here...</h1>
		</div>
	);

	return (
		<div className={style.container}>
			{totalPages > 1 ? (
				<div className={style.buttonPag}>
					<button onClick={prevPage} disabled={currentPage === 1}>
						Prev
					</button>
					{showPages}
					<button onClick={nextPage} disabled={currentPage === totalPages}>
						Next
					</button>
				</div>
			) : (
				false
			)}
			{showCards}
		</div>
	);
};

export default Pagination;
