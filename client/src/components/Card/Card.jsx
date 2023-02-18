import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
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
		</div>
	);
};
export default Card;
