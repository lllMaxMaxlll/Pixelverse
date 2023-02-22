import { useSelector } from "react-redux";
import CardsVideogames from "../../components/CardsVideogames/CardsVideogames";
import Loader from "../../components/Loader/Loader";
import style from "./Home.module.css";

const Home = () => {
	const loading = useSelector((state) => state.isLoading);

	return <div className={style.container}>{loading ? <Loader /> : <CardsVideogames />}</div>;
};

export default Home;
