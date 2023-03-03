import style from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Pixelheart } from "../../views/Landing/Pixelheart";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
	// Change name logo to white in detail page!
	const location = useLocation();
	const logoNameColor = location.pathname.includes("/detail")
		? style.logoNameWhite
		: style.logoNameColor;
	const logoColor = location.pathname.includes("/detail") ? "#e1e1e1" : "#4d194d";
	const navbarColor = location.pathname.includes("detail") ? style.navDark : false;
	const inHome = location.pathname.includes("/detail") ? false : true;

	let prevScrollpos = window.pageYOffset;
	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		prevScrollpos > currentScrollPos
			? (document.getElementById("navbar").style.top = "0")
			: (document.getElementById("navbar").style.top = "-4.8rem");
		prevScrollpos = currentScrollPos;
	};
	return (
		<header className={`${style.nav} ${navbarColor}`} id='navbar'>
			<div className={style.logoContainer}>
				<Pixelheart color={logoColor} width={"35px"} />
				<NavLink to={"/home"}>
					<h1 className={logoNameColor}>PIXELVERSE</h1>
				</NavLink>
			</div>
			{inHome && <SearchBar />}
			<div className={style.menu}>
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
