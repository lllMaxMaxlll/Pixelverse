import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
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
		</div>
	);
};
export default Card;
