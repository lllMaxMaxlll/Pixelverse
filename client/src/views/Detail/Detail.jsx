import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	// Get info from store
	const videogame = useSelector((state) => state.videogameDetail);

	useEffect(() => {
		dispatch(getDetail(id));
	}, [id]);

	return (
		<div className={style.container}>
			<h1>Detail from ID {id}</h1>
			<img src={videogame.background_image} />
			<p>{videogame.name}</p>
			<p dangerouslySetInnerHTML={{ __html: videogame.description }} />
			<p>{videogame.released}</p>
			<p>{videogame.rating}</p>
			<p>{videogame.genres}</p>
			<p>{videogame.platforms}</p>
		</div>
	);
};

export default Detail;
