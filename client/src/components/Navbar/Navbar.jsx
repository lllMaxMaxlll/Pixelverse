import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={style.nav}>
			<NavLink to={"/home"} className={style.svglogo}>
				<h1 className={style.logo}>PIXELVERSE</h1>
			</NavLink>
			<div className={style.buttons}>
				<div>
					<NavLink to={"/home"}>
						<button className={location.pathname === "/home" ? style.active : style.button}>
							Home
						</button>
					</NavLink>
					<NavLink to={"/create"}>
						<button className={location.pathname === "/create" ? style.active : style.button}>
							Create
						</button>
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
		</div>
	);
};

export default Navbar;
