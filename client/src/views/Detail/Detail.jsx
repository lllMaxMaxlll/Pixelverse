import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail, cleanID, deleteVideogameCreated, deleteGame } from "../../redux/actions";
import style from "./Detail.module.css";
import Loader from "../../components/Loader/Loader";

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// loading local state for render detail or loader
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

	// Delete only created game
	const onClose = (id) => {
		dispatch(deleteVideogameCreated(id));
		dispatch(deleteGame(id));
		// Redirect to home
		navigate("/home");
	};

	return (
		<div className={style.container}>
			{loading ? (
				<Loader />
			) : (
				<div className={style.detail}>
					<div
						className={style.background}
						style={{
							backgroundImage: `radial-gradient(circle, rgba(17,17,17,0.8) 0%, rgba(17,17,17,0.85) 50%,rgba(17,17,17,0.9) 100%), url(${game.background_image})`,
						}}></div>
					<div className={style.title}>
						<h1>{game.name}</h1>
					</div>
					<div className={style.infoContainer}>
						<div className={style.title}>
							<p dangerouslySetInnerHTML={{ __html: game.description }} />
						</div>
						<div className={style.info}>
							<span>Released:</span>
							<p>{game.released}</p>
							<span>Rating:</span>
							<p>{game.rating}</p>
							<span>Genres:</span>
							<p>{game.genres}</p>
							<span>Platforms:</span>
							<p>{game.platforms}</p>
						</div>
					</div>
					{game.created && <button onClick={() => onClose(game.id)}>Delete game</button>}
					<button onClick={() => navigate(-1)}>Go back!</button>
				</div>
			)}
		</div>
	);
};

export default Detail;
