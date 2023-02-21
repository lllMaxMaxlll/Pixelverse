import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteGame } from "../../redux/actions";
import style from "./Card.module.css";

const Card = (props) => {
	const dispatch = useDispatch();
	// Delete only created game
	const onClose = (id) => {
		dispatch(deleteGame(id));
	};

	return (
		<div className={style.card}>
			<img src={props.image} alt='bg-game' className={style.cardImg} />
			<div className={style.cardInfo}>
				<NavLink to={`/detail/${props.id}`}>
					<h2 className={style.title}>{props.name}</h2>
				</NavLink>
				<div className={style.subtitle}>
					<h2>{props.rating}</h2>
				</div>
			</div>
			{props.created && <button onClick={() => onClose(props.id)}>X</button>}
		</div>
	);
};
export default Card;
