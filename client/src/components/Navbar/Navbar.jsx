import style from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Pixelheart } from "../../views/Landing/Pixelheart";
import SearchBar from "../SearchBar/SearchBar";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
	const location = useLocation();
	// Change name logo to white in detail page!
	const logoNameColor = location.pathname.includes("/detail")
		? style.logoNameWhite
		: style.logoNameColor;
	const logoColor = location.pathname.includes("/detail") ? "#e1e1e1" : "#4d194d";
	// Change navbar color in detail page!
	const navbarColor = location.pathname.includes("detail") ? style.navDark : false;
	// Hide searchbar in detail page!
	const inHome = location.pathname.includes("/detail") ? false : true;

	// Hide navbar when scroll down
	let prevScrollpos = window.pageYOffset;
	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		// If scroll down hide navbar
		// console.log(currentScrollPos);
		console.log(prevScrollpos);
		prevScrollpos > currentScrollPos
			? (document.getElementById("navbar").style.top = "0")
			: (document.getElementById("navbar").style.top = "-4.8rem");
		// If scroll down and view detail, put blur to navbar
		location.pathname.includes("/detail") && prevScrollpos > 50
			? (document.getElementById("navbar").style.backdropFilter = "blur(10px)")
			: (document.getElementById("navbar").style.backdropFilter = "none");

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
			<MdOutlineMenu className={style.buttonMenu} />
		</header>
	);
};

export default Navbar;
