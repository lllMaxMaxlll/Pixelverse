import "./App.css";
import { Route, Routes } from "react-router-dom";
import Videogames from "./components/Videogames";
import Detail from "./components/Detail";
import Landing from "./components/Landing";
import CreateVideogame from "./components/CreateVideogame";

const App = () => {
	return (
		<div className='App'>
			{/* <NavBar />
        Que se renderice cuando no este en landing
      */}
			<Routes>
				<Route exact path='/' element={<Landing />}></Route>
				<Route path='/videogames' element={<Videogames />}></Route>
				<Route path='/videogame/:id' element={<Detail />}></Route>
				<Route path='/videogame/create' element={<CreateVideogame />}></Route>
				{/* <Route path='/favorites' element={<Favorites />}></Route> */}
			</Routes>
		</div>
	);
};

export default App;
