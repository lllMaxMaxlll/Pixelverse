import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Filters.module.css";
import { orderName, filterGenre, orderRating, filterCreated } from "../../redux/actions";

export const Filters = () => {
	const allGenres = useSelector((state) => state.allGenres);
	const dispatch = useDispatch();

	const handleOrderName = (e) => {
		dispatch(orderName(e.target.value));
	};

	const handleOrderRating = (e) => {
		dispatch(orderRating(e.target.value));
	};

	const handleFilterGenre = (e) => {
		dispatch(filterGenre(e.target.value));
	};

	const handleFilterCreated = (e) => {
		dispatch(filterCreated(e.target.value));
	};

	return (
		<div>
			<div className={style.selectors}>
				<select name='orderAlphabetic' onChange={handleOrderName} className={style.select}>
					<option value='a-z'>A-Z</option>
					<option value='z-a'>Z-A</option>
				</select>
				<select name='orderRating' onChange={handleOrderRating} className={style.select}>
					<option value='5-0'>5-0</option>
					<option value='0-5'>0-5</option>
				</select>
				<select name='genres' onChange={handleFilterGenre} className={style.select}>
					<option value='All'>All</option>
					{allGenres.map((G) => (
						<option value={G.name} key={G.id}>
							{G.name}
						</option>
					))}
				</select>
				<select name='created' onChange={handleFilterCreated} className={style.select}>
					<option value='All'>All</option>
					<option value='created'>Created</option>
					<option value='notCreated'>Not Created</option>
				</select>
			</div>
		</div>
	);
};
