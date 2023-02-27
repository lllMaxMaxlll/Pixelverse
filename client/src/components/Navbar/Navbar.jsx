import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Pixelheart } from "../../views/Landing/Pixelheart";

const Navbar = () => {
	return (
		<div className={style.nav}>
			<div className={style.logoContainer}>
				<Pixelheart color={"#4d194d"} width={"32px"} />
				<NavLink to={"/home"}>
					<h1 className={style.logoName}>PIXELVERSE</h1>
				</NavLink>
			</div>
			<div>
				<NavLink to={"/home"}>
					<button className={style.buttons}>Home</button>
				</NavLink>
				<NavLink to={"/create"}>
					<button className={style.buttons}>Create</button>
				</NavLink>
				{/* <NavLink to={"/favorites"}>
						<button
							className={
								location.pathname === "/favorites"
									? style.active
									: style.button
							}>
							Favorites
						</button>
					</NavLink> */}
			</div>
		</div>
	);
};

export default Navbar;
