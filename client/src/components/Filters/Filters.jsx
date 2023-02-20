import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Filters.module.css";
import { orderName, orderGenre } from "../../redux/actions";

export const Filters = () => {
	const allGenres = useSelector((state) => state.allGenres);
	const dispatch = useDispatch();

	const handleOrder = (e) => {
		dispatch(orderName(e.target.value));
	};

	const handleFilter = (e) => {
		dispatch(orderGenre(e.target.value));
	};

	return (
		<div>
			<div className={style.selectors}>
				<select name='order' onChange={handleOrder} className={style.select}>
					<option value='asc'>ASC</option>
					<option value='desc'>DESC</option>
				</select>
				<select name='genres' onChange={handleFilter} className={style.select}>
					<option value='All'>All</option>
					{allGenres.map((G) => (
						<option value={G.name} key={G.id}>
							{G.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
