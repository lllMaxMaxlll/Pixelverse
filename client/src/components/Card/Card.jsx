import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteGame } from "../../redux/actions";
import style from "./Card.module.css";
import { RxCrossCircled } from "react-icons/rx";

const Card = (props) => {
	const dispatch = useDispatch();
	// Delete only created game
	const onClose = (id) => {
		dispatch(deleteGame(id));
	};

	return (
		<div className={style.card}>
			<div className={style.cardInfo}>
				<NavLink to={`/detail/${props.id}`}>
					<h2 className={style.title}>{props.name}</h2>
				</NavLink>
			</div>
			<div className={style.cardSubtitle}>
				{props.genres.map((g) => (
					<p key={g.id}>{g.name}</p>
				))}
			</div>
			<img src={props.background_image} alt='bg-game' className={style.cardImg} />
			{props.created && (
				<button className={style.buttonClose} onClick={() => onClose(props.id)}>
					<RxCrossCircled />
				</button>
			)}
		</div>
	);
};
export default Card;
