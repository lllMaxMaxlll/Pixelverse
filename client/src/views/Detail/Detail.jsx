import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail, cleanID } from "../../redux/actions";
import style from "./Detail.module.css";
import Loader from "../../components/Loader/Loader";

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	// Get info from store
	const game = useSelector((state) => state.videogameDetail);

	useEffect(() => {
		dispatch(getDetail(id)).then(() => setLoading(false));
		return () => {
			setLoading(true);
			dispatch(cleanID());
		};
	}, [id]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<div className={style.container}>
					<h1>Detail from ID {id}</h1>
					<img src={game.background_image} alt={game.name} />
					<h2>{game.name}</h2>
					<p dangerouslySetInnerHTML={{ __html: game.description }} />
					<p>{game.released}</p>
					<p>{game.rating}</p>
					<p>{game.genres}</p>
					<p>{game.platforms}</p>
					<button onClick={() => navigate("/home")}>Go bacK!</button>
				</div>
			)}
		</div>
	);
};

export default Detail;
