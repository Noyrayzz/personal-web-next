import ThemeChanger from "./themeChanger";

const Nav = () => {
	return (
		<nav className="flex py-6 px-14 space-x-20 items-center justify-around lg:justify-around">
			<div className="lg:text-xl">
				<h1>Kelvin</h1>
			</div>
			<div className="flex space-x-3 items-center lg:text-xl">
				<h2 className="">About Me</h2>
				<ThemeChanger />
			</div>
		</nav>
	);
};

export default Nav;
