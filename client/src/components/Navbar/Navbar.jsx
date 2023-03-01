import style from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Pixelheart } from "../../views/Landing/Pixelheart";

const Navbar = () => {
	// Change name logo to white in detail page!
	const location = useLocation();
	const logoNameColor = location.pathname.includes("/detail")
		? style.logoNameWhite
		: style.logoNameColor;
	const logoColor = location.pathname.includes("/detail") ? "#e1e1e1" : "#4d194d";

	return (
		<header className={style.nav}>
			<div className={style.logoContainer}>
				<Pixelheart color={logoColor} width={"35px"} />
				<NavLink to={"/home"}>
					<h1 className={logoNameColor}>PIXELVERSE</h1>
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
		</header>
	);
};

export default Navbar;
