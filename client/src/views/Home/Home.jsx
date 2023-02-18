import { useSelector } from "react-redux";
import Videogames from "../../components/CardsVideogames/CardsVideogames";
import Loader from "../../components/Loader/Loader";

const Home = () => {
	const loading = useSelector((state) => state.isLoading);
	return <div>{loading ? <Loader /> : <Videogames />}</div>;
};

export default Home;
